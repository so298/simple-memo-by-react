import { FC } from "react"
import { AddForm } from "./AddForm"
import { MemoList } from "./memoList"
import { MemoListProvider } from "./provider/memoListProvider"

export const App: FC = () => {
  return (
    <>
      <h1>Simple memo app</h1>
      <MemoListProvider>
        <AddForm />
        <MemoList />
      </MemoListProvider>
    </>
  )
}