const db = require("../config/database");

const getAllGraph = async (req, res) => {
  try {
    const firstQuery = 
    `SELECT 
        l.name AS location_name, 
        (SELECT COUNT(*) FROM crime c WHERE c.location_id = l.id) AS total_crimes
     FROM locations l
     ORDER BY total_crimes DESC
     Limit 5`;

     const secondQuery = 
    `SELECT 
        r.name AS region_name, 
        (SELECT COUNT(*) FROM crime c 
         JOIN locations l ON c.location_id = l.id 
         WHERE l.region_id = r.id) AS total_crimes
     FROM region r
     ORDER BY total_crimes DESC
     Limit 5`;

     const thirdQuery = `
    WITH CrimeCounts AS (
        SELECT 
            s.name AS station_name, 
            COUNT(c.id) AS total_crimes,
            RANK() OVER (ORDER BY COUNT(c.id) DESC) AS rank_position
        FROM station s
        JOIN region r ON s.region_id = r.id
        JOIN locations l ON l.region_id = r.id
        JOIN crime c ON c.location_id = l.id
        GROUP BY s.name
    )
    SELECT station_name, total_crimes
    FROM CrimeCounts
    WHERE rank_position <= 3
    ORDER BY total_crimes DESC;
`;



    const [firstResults] = await db.query(firstQuery);
    const [secondResults] = await db.query(secondQuery);
    const [thirdResults] = await db.query(thirdQuery);

    res.json({
      sql: { firstQuery, secondQuery, thirdQuery },
      data: {
        firstTable: firstResults,
        secondTable: secondResults,
        thirdTable: thirdResults

      }
    });
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllGraph };
