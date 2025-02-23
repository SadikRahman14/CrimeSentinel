const express = require("express");
const {
    getAllExperiments,
} = require("../controllers/experimentController");

//const requireAuth = require('../middleware/requireAuth');



const router = express.Router();
//router.use(requireAuth);

// Get all entries
router.get("/", getAllExperiments);



module.exports = router;

