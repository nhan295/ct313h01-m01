const express = require("express");
const mysql = require("mysql"); // Đổi thành mysql2
const dotenv = require("dotenv");

dotenv.config({path: './.env'});
const app = express();

// Thiết lập kết nối với MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Kết nối tới MySQL và kiểm tra lỗi
db.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối MySQL:', err.message); // Sửa lỗi ở đây
    } else {
        console.log("MySQL Connected...!");
    }
});

const port = process.env.PORT || 3000;

// Route cơ bản để kiểm tra API
app.get("/", (req, res) => {
    res.json({ message: 'Welcome to my API!' });
});

// Khởi chạy server
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
