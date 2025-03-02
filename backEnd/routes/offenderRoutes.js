const express = require("express");
const { getAllOffenders } = require("../controllers/offenderController");

const router = express.Router();

router.get("/", getAllOffenders);

module.exports = router;
