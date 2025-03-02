const express = require("express");
const {
    getAllGraph,
} = require("../controllers/graphContoller");

//const requireAuth = require('../middleware/requireAuth');



const router = express.Router();
//router.use(requireAuth);

// Get all entries
router.get("/", getAllGraph);



module.exports = router;

