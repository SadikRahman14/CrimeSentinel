const express = require("express");
const { getAllVictims } = require("../controllers/victimController");

const router = express.Router();

router.get("/", getAllVictims);

module.exports = router;
