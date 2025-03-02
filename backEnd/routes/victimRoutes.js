const express = require('express');
const router = express.Router();

// Example route (change accordingly)
router.get('/', (req, res) => {
    res.json({ message: "Victim routes working!" });
});

module.exports = router;  // ✅ Make sure you export router
