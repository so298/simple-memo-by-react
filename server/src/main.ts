import Express from "express";
import cors from "cors";
import mysql from "mysql2";
// const app = Express();
// const port = 4000

// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
//     optionsSuccessStatus: 200,
// }))

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// })

import { init, appendMemo, getAllMemo } from "./dbHelper";

init();

appendMemo({
    title: "TEST",
    id: 1,
    enabled: true,
});

getAllMemo()
