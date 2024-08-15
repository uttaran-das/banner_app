import express from "express";
import db from "../db";

const router = express.Router();

router.get("/", (req, res) => {
    let sql = "SELECT * FROM banners LIMIT 1";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result[0]);
    });
});

router.put("/update", (req, res) => {
    console.log(req.body);
    let { description, timer, link } = req.body;
    if (!timer) timer = 0; // ** This is important so thay when timer is null (timer = ""), the sql query does not break
    let sql = `INSERT INTO banners (id, description, timer, link) VALUES (1, '${description}', ${timer}, '${link}') ON DUPLICATE KEY UPDATE description='${description}', timer=${timer}, link='${link}'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Banner updated...');
    });
});

export default router;