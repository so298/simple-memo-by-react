import { createContext, FC, useState } from "react";
import { useMemoList } from "../hooks/useMemoList";
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
    const {
        memoList, 
        setMemoList,
        appendMemo,
        deleteMemo,
    } = useMemoList();
    return (
        <MemoListContext.Provider value={{memoList, setMemoList, appendMemo, deleteMemo}}>
            {children}
        </MemoListContext.Provider>
    )
}