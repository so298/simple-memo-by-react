import { FC, useContext } from "react";
import { MemoListItem } from "./MemoListItem";
import { MemoListContext } from "./provider/memoListProvider";


export const MemoList: FC = () => {
    const memoListStyle = {
        border: 'solid',
        marginTop: '10px'
    }
    const { memoList } = useContext(MemoListContext);
    console.log(memoList);
    return (
        <div style={memoListStyle}>
            <h3>Memo List</h3>
            <ul>
                {memoList?.filter(elem => elem.enabled)
                          .map((elem) => <MemoListItem title={elem.title} id={elem.id} enabled={true}/>)}
            </ul>
        </div>
    )
}