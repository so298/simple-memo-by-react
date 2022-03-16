import Express from "express";
import cors from "cors";
import mysql from "mysql2";
import * as bodyParser from "body-parser";

import { init, appendMemo, getAllMemo, deleteAllMemo, deleteMemoById } from "./dbHelper";
import { Memo } from "./types/memoType";

init();
const app = Express();
const port = 4000

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
}));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true,
// }));

app.get('/memo/all', async (req, res) => {
    const allMemo = await getAllMemo();
    res.json(allMemo);
})

app.delete('/memo/delete_all', async (req, res) => {
    await deleteAllMemo();
    res.send('successfully deleted all memos.\n');
})

app.delete('/memo/delete/:id', async (req, res) => {
    await deleteMemoById(parseInt(req.params.id));
    res.send('successfully deleted');
})

app.post('/memo/append', async (req, res) => {
    console.log(req.body);
    const data = req.body as Memo;
    await appendMemo(data);
    res.send("success!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
