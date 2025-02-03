const express = require("express");
const cors = require("cors");
const sql = require("mssql");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

sql.connect(dbConfig)
    .then(() => console.log("Connected to SQL Server"))
    .catch(err => console.error("Database Connection Failed", err));

app.get("/", (req, res) => {
    res.send("API is working!");
});

app.listen(5000, () => console.log("Server running on port 5000"));
