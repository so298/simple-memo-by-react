import { FC, useContext } from "react";
import type { MemoData } from "./types/memoData";
import { MemoListContext } from "./provider/memoListProvider";

export const MemoListItem: FC<MemoData> = (props) => {
    const { id, title } = props;
    const { deleteMemo } = useContext(MemoListContext);
    const onClickDelete = () => {
        if (deleteMemo !== undefined) {
            deleteMemo(id);
        }
    }
    return (
        <li>
            title: {title}, id: {id}
            <button onClick={onClickDelete}>delete</button>
        </li>
    )
}