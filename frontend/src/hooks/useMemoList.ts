import axios from "axios";
import { useEffect, useState } from "react";
import { MemoData, MemoListData } from "../types/memoData";

export async function getAllMemoRemote() {
    const res = await axios.get<MemoData[]>('http://localhost:4000/memo/all');
    return res.data;
}

async function appendMemoRemote(title: string) {
    await axios.post('http://localhost:4000/memo/all')
}

export const useMemoList = () => {
    const [memoList, setMemoList] = useState<MemoListData>([]);
    useEffect(() => {
        axios.get<MemoData[]>('http://localhost:4000/memo/all').then((res) => {
            setMemoList(res.data);
        })
    }, []);

    const appendMemo = (title: string) => {
        setMemoList(prev => {
            const newMemo: MemoData = {
                id: prev.length + 1,
                title,
                enabled: true,
            }
            prev = prev.slice(0, prev.length);
            prev.push(newMemo);
            axios.post('http://localhost:4000/memo/append', newMemo);
            return prev;
        });
    }

    const deleteMemo = (id: number) => {
        setMemoList(prev => prev.map(elem => {
            if (elem.id === id) elem.enabled = false;
            axios.delete(`http://localhost:4000/memo/delete/${id}`);
            return elem;
        }));
    }

    return {
        memoList,
        setMemoList,
        appendMemo,
        deleteMemo,
    };
}