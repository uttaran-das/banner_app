"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../db"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    let sql = "SELECT * FROM banners WHERE id = 1";
    db_1.default.query(sql, (err, result) => {
        if (err)
            throw err;
        res.send(result);
    });
});
router.put("/update", (req, res) => {
    const { description, timer, link } = req.body;
    let sql = `UPDATE banners SET description = '${description}', timer = ${timer}, link = '${link}' WHERE id = 1`;
    db_1.default.query(sql, (err, result) => {
        if (err)
            throw err;
        res.send('Banner updated...');
    });
});
exports.default = router;
