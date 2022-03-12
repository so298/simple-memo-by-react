import { createContext, FC, useState } from "react";
import type { MemoData, MemoListData } from "../types/memoData";

type MemoListContextType = {
    memoList?: MemoListData,
    setMemoList?: React.Dispatch<React.SetStateAction<MemoListData>>,
    appendMemo?: (title: string) => void,
    deleteMemo?: (id: number) => void,
}

export const MemoListContext = createContext<MemoListContextType>({});

export const MemoListProvider: FC = (props) => {
    const children = props.children;
    const [memoList, setMemoList] = useState<MemoListData>([]);
    const appendMemo = (title: string) => {
        setMemoList(prev => {
            const newMemo: MemoData = {
                id: prev.length + 1,
                title,
                enabled: true,
            }
            prev = prev.slice(0, prev.length);
            prev.push(newMemo);
            return prev;
        })
    }
    const deleteMemo = (id: number) => {
        setMemoList(prev => prev.map(elem => {
            if (elem.id === id) elem.enabled = false;
            return elem;
        }));
    }
    return (
        <MemoListContext.Provider value={{memoList, setMemoList, appendMemo, deleteMemo}}>
            {children}
        </MemoListContext.Provider>
    )
}