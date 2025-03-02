const express = require("express");
const { getAllWitnesses } = require("../controllers/witnessController");

const router = express.Router();

router.get("/", getAllWitnesses);

module.exports = router;
