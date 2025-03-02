const express = require("express");
const { getAllReports, getSingleReport  } = require("../controllers/reportController");

const router = express.Router();

router.get("/", getAllReports);

router.get("/:id", getSingleReport);

module.exports = router;
