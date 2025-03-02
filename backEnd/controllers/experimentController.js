const db = require("../config/database");

const getAllExperiments = async (req, res) => {
  try {
    const firstQuery = 
    `SELECT  
        c.id AS crime_id,
        c.date AS crime_date,
        c.status AS crime_status,
        ct.id AS type_id, 
        ct.name AS type_name,
        cc.id AS category_id, 
        cc.name AS category_name
      FROM crime c
      LEFT JOIN crimetypes ct ON c.type_id = ct.id
      LEFT JOIN crimecategories cc ON ct.category_id = cc.id`;

    const secondQuery = 
    `SELECT 
        ct.id AS type_id, 
        ct.name AS type_name, 
        cc.id AS category_id, 
        cc.name AS category_name
      FROM crimetypes ct
      LEFT JOIN crimecategories cc ON ct.category_id = cc.id`;

    const [firstResults] = await db.query(firstQuery);
    const [secondResults] = await db.query(secondQuery);

    res.json({
      sql: { firstQuery, secondQuery },
      data: {
        firstTable: firstResults,
        secondTable: secondResults
      }
    });
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllExperiments };
