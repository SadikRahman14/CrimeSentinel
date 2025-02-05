const express = require("express"); // Only import express here
const cors = require("cors");
const sql = require("mssql");
require("dotenv").config();
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth"); // Import authRoutes here

const app = express();

const corsOptions = {
    origin: "http://localhost:5173",  // Allow requests from the frontend URL
    methods: "GET,POST",
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  
app.use(express.json());
app.use("/auth", authRoutes);  // Use the authRoutes for handling authentication

// Database connection
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
};

// Connect to SQL Server
sql.connect(dbConfig)
    .then(() => console.log("Connected to SQL Server"))
    .catch(err => console.error("Database Connection Failed", err));

// Test route
app.get("/", (req, res) => {
    res.send("API is working!");
});

// Start the server
app.listen(3000, () => console.log("Server running on port 5000"));
