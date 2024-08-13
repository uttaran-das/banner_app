"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("mysql");
require("dotenv/config");
const db = (0, mysql_1.createConnection)({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
db.connect(err => {
    if (err)
        throw err;
    console.log('MySQL connected...');
});
exports.default = db;
