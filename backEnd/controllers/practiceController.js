const db = require("../config/database");

const getAllExperiments = async (req, res) => {
  try {
    const firstQuery = 
    `SELECT 
    ct.id AS id, 
    ct.name AS name, 
    cc.id AS id, 
    cc.name AS name,
    cc.longitude AS longitude,
    cc.latitude AS latitude,
    ct.id = cc.region_id

  FROM regions ct
  LEFT JOIN locations cc ON ct.id = cc.region_id`;

    const secondQuery = 
    `SELECT 
        ct.id AS id, 
        ct.name AS name, 
        cc.id AS id, 
        cc.name AS name,
        cc.longitude AS longitude,
       cc.latitude AS latitude,
       ct.id = cc.region_id
      FROM regions ct
      LEFT JOIN locations cc ON ct.id = cc.region_id`;

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
