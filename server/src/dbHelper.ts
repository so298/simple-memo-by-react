import * as mysql from "mysql2/promise";
import { Memo } from "./types/memoType";


const connectionConfig: mysql.ConnectionOptions = {
    host: "mysql",
    user: "root",
    password: "secret",
    database: "memo_app",
}


export async function init(): Promise<void> {
    const conn = await mysql.createConnection(connectionConfig);
    // conn.connect();
    try {
        conn.query(
            "CREATE TABLE IF NOT EXISTS memos (id int, title varchar(255), enabled boolean);",
        )
    } catch (err) {
        console.error(err);
    } finally {
        conn.end();
    }
}

export async function appendMemo(newMemo: Memo): Promise<void> {
    const conn = await mysql.createConnection(connectionConfig);
    try {
        conn.query(
            "INSERT into memos SET ?", newMemo,
        )
    } catch (err) {
        console.error(err);
    } finally {
        conn.end();
    }
}

export async function getAllMemo(): Promise<Memo[]> {
    let ret: Memo[] = [];
    const conn = await mysql.createConnection(connectionConfig);
    try {
        const [rows, fields] = await conn.query("SELECT * from memos");
        ret = rows as Memo[];
    } catch (err) {
        console.error(err);
    } finally {
        conn.end();
    }

    return ret;
}

export async function deleteAllMemo(): Promise<void> {
    const conn = await mysql.createConnection(connectionConfig);
    try {
        await conn.query("DELETE FROM memos;");
    } catch (err) {
        console.error(err);
    } finally {
        conn.end();
    }
}
