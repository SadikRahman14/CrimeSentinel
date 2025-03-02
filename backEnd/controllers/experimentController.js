const db = require("../config/database");

const getAnalyticsData = async (req, res) => {
  try {
    const topCrimeCategoryQuery = `
      SELECT cc.name AS category_name, COUNT(co.id) AS total_offenders
      FROM crime_offender co
      JOIN crime c ON co.crime_id = c.id
      JOIN crimetypes ct ON c.crime_type_id = ct.id
      JOIN crimecategories cc ON ct.category_id = cc.id
      GROUP BY cc.name
      ORDER BY total_offenders DESC
      LIMIT 1;
    `;

    const dangerousLocationsQuery = `
      SELECT l.region, COUNT(c.id) AS total_crimes
      FROM crime c
      JOIN location l ON c.location_id = l.id
      GROUP BY l.region
      ORDER BY total_crimes DESC
      LIMIT 5;
    `;

    const fugitivesQuery = `
      SELECT name, age, gender, status
      FROM crime_offender
      WHERE status = 'fugitive'
      ORDER BY age DESC;
    `;

    // Execute queries
    const [topCrimeCategory] = await db.query(topCrimeCategoryQuery);
    const [dangerousLocations] = await db.query(dangerousLocationsQuery);
    const [fugitives] = await db.query(fugitivesQuery);

    // Send response in the required format
    res.json({
      sql: {
        topCrimeCategoryQuery,
        dangerousLocationsQuery,
        fugitivesQuery
      },
      data: {
        topCrimeCategory,
        dangerousLocations,
        fugitives
      }
    });

  } catch (error) {
    console.error("Error executing analytics queries:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAnalyticsData };
