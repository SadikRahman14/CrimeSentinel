const express = require("express");
const { getFilteredCrimeReports } = require("../controllers/queryController");

const router = express.Router();

 // GET all crime reports (no filters applied)
 router.get("/", getFilteredCrimeReports);

// POST request for filtering crime reports
router.post("/", getFilteredCrimeReports);

module.exports = router;
