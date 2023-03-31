import { pool } from "../db.js";

export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT 9 + 5 AS result')
    res.json(result[0])
}