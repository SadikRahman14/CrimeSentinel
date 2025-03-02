const db = require("../config/database");

const getAllOffenders = async (req, res) => {
  try {
    const query = `SELECT id, name, age, gender, status, crime_id FROM crime_offender`;
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

module.exports = { getAllOffenders };
