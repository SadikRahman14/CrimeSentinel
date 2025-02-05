const express = require("express");
const sql = require("mssql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

// POST signup route
router.post("/signup", async (req, res) => {
    const { username, password, email } = req.body;

    // Check if username, password, and email are provided
    if (!username || !password || !email) {
        return res.status(400).json({ message: "Please provide username, password, and email." });
    }

    try {
        // Check if the user already exists based on email
        const checkUser = await sql.query`SELECT * FROM Users WHERE email = ${email}`;
        if (checkUser.recordset.length > 0) {
            return res.status(400).json({ message: "Email already in use" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the database
        await sql.query`
            INSERT INTO Users (username, password_hash, email)
            VALUES (${username}, ${hashedPassword}, ${email})
        `;

        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error during signup:", error);
        return res.status(500).json({ message: "Server error during signup" });
    }
});

// POST login route
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send("Username and password are required");
    }

    try {
        // Find the user from the database
        const result = await sql.query`SELECT * FROM Users WHERE username = ${username}`;
        const user = result.recordset[0];

        if (!user) {
            return res.status(400).send("User not found");
        }

        // Compare the password with the hashed password stored in the database
        const validPassword = await bcrypt.compare(password, user.password_hash);
        if (!validPassword) {
            return res.status(400).send("Invalid password");
        }

        // Create JWT Token
        const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token });
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).send("Server error during login");
    }
});

module.exports = router;
