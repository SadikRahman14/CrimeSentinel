const express = require("express");
const {
  getAllGreenBecks,
  getSingleGreenBeck,
  createGreenBeck,
} = require("../controllers/greenBeckController");

const router = express.Router();

// Get all entries
router.get("/", getAllGreenBecks);

// Get a single entry
router.get("/:id", getSingleGreenBeck);

// Create a new entry
router.post("/", createGreenBeck);

module.exports = router;
