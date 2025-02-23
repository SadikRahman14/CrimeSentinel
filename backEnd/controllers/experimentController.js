const db = require("../config/database");

const getAllExperiments = async (req, res) => {
  try {
    const query = `
      SELECT cc.id AS category_id, cc.name AS category_name, 
             ct.id AS type_id, ct.name AS type_name
      FROM crimecategories cc
      LEFT JOIN crimetypes ct ON cc.id = ct.category_id
    `;

    const [results] = await db.query(query); 

    res.json({ sql: query, data: results }); 
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllExperiments };
