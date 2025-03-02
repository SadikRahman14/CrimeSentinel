const db = require("../config/database");

const getAllVictims = async (req, res) => {
  try {
    const query = `SELECT * FROM crime_victim`;
    const [results] = await db.query(query);

    res.json({
      sql: query,
      data: results
    });
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllVictims };
