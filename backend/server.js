// backend/server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'expense_tracker'
});

db.connect(err => {
    if (err) console.log("DB Connection Error:", err);
    else console.log("Connected to MySQL Database");
});

// Test Route to get Expenses
app.get('/expenses', (req, res) => {
    const sql = "SELECT * FROM expenses";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});