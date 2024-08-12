import express from "express";
import db from "../db";

const router = express.Router();

router.get("/", (req, res) => {
    let sql = "SELECT * FROM banners WHERE id = 1";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.put("/update", (req, res) => {
    const { description, timer, link } = req.body;
    let sql = `UPDATE banners SET description = '${description}', timer = ${timer}, link = '${link}' WHERE id = 1`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Banner updated...');
    });
});

export default router;