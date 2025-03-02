const db = require("../config/database");

const getAllWitnesses = async (req, res) => {
  try {
    const query = `SELECT id, name, contact_no, crime_id FROM crime_witness`;
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

module.exports = { getAllWitnesses };
