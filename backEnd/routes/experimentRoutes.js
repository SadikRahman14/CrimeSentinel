const express = require("express");
const {
    getAnalyticsData,
} = require("../controllers/experimentController");

//const requireAuth = require('../middleware/requireAuth');



const router = express.Router();
//router.use(requireAuth);

// Get all entries
router.get("/", getAnalyticsData);



module.exports = router;

