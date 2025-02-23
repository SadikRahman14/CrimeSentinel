const db = require("../config/database");

const getFilteredCrimeReports = async (req, res) => {
  try {
    const { crimeTypes = [], categories = [], severityLevels = [] } = req.body; // Read from request body

    // Log the applied filters
    console.log("Applied Filters:");
    console.log("Crime Types: ", crimeTypes);
    console.log("Categories: ", categories);
    console.log("Severity Levels: ", severityLevels);

    let query = `
      SELECT 
        c.id AS crime_id,
        c.date AS crime_date,
        c.status AS crime_status,
        ct.name AS type_name,
        cc.name AS category_name
      FROM crimes c
      LEFT JOIN crimetypes ct ON c.type_id = ct.id
      LEFT JOIN crimecategories cc ON ct.category_id = cc.id
      WHERE 1=1
    `;

    // Array to store conditions dynamically
    const conditions = [];

    // Apply filters only if values exist
    crimeTypes.forEach(type => conditions.push(`ct.name = '${type}'`));
    categories.forEach(category => conditions.push(`cc.name = '${category}'`));
    severityLevels.forEach(level => conditions.push(`c.status = '${level}'`));

    // If there are conditions, append them to the query with AND
    if (conditions.length > 0) {
      query += " AND " + conditions.join(" AND ");
    }

    console.log("Final Query: ", query); // Log the final query

    const [results] = await db.query(query);
    res.json({ data: results });
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "An error occurred while fetching data. Please try again." });
  }
};

module.exports = { getFilteredCrimeReports };
