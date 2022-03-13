import * as mysql from "mysql2";
import { Memo } from "./types/memoType";

const conn = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "secret",
    database: "memo_app",
})

conn.connect((err) => {
    if (err != null) {
        console.error("Database connection failed.");
    } else {
        console.log("Connected database successfully")
    }
})

export function init(): void {
    conn.query(
        "CREATE TABLE IF NOT EXISTS memos (id int, title varchar(255), enabled boolean);",
        (err) => {
            if (err != null) {
                console.error(err);
            }
        }
    )
}

export function appendMemo(newMemo: Memo): void {
    conn.query(
        "INSERT into memos SET ?", newMemo,
        (err) => {
            if (err != null) {
                console.error(err);
            }
        }
    )
}

export function getAllMemo(): Memo[] {
    conn.query("SELECT * from memos", (err, rows, fields) => {
        if (err != null) {
            console.error(err);
        }
        console.log(rows);
    })
    return []
}
