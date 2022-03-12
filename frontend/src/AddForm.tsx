import { FC, useContext } from "react";
import { MemoListContext } from "./provider/memoListProvider";

export const AddForm: FC = () => {
    const { appendMemo } = useContext(MemoListContext);

    const onClickAdd = () => {
        if (appendMemo !== undefined) {
            const titleInput = document.getElementById('title') as HTMLInputElement;
            const memoTitle = titleInput?.value;
            appendMemo(memoTitle);
            titleInput.value = '';
        } else {
            console.log('appendMemo is undefined');
        }
    }

    return (
        <div>
            <input type='text' id='title'></input>
            <button onClick={onClickAdd}>add</button>
        </div>
    )
}