const db = require("../config/database");

const getTopCrimeCategory = async (req, res) => {
  try {
    const query = `
      SELECT cc.name AS category_name, COUNT(co.id) AS total_offenders
      FROM crime_offender co
      JOIN crime c ON co.crime_id = c.id
      JOIN crime_type ct ON c.type_id = ct.id
      JOIN crime_category cc ON ct.category_id = cc.id
      GROUP BY cc.name
      ORDER BY total_offenders DESC
      LIMIT 1;
    `;
    const [result] = await db.query(query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDangerousLocations = async (req, res) => {
  try {
    const query = `
      SELECT r.name AS region_name, COUNT(c.id) AS total_crimes
      FROM crime c
      JOIN location l ON c.location_id = l.id
      JOIN region r ON l.region_id = r.id
      GROUP BY r.name
      ORDER BY total_crimes DESC
      LIMIT 5;
    `;
    const [result] = await db.query(query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// New complex queries
const getMonthlyCrimeTrends = async (req, res) => {
  try {
    const query = `
      SELECT MONTH(date_reported) AS month, COUNT(*) AS crime_count
      FROM crime
      GROUP BY MONTH(date_reported)
      ORDER BY month;
    `;
    const [result] = await db.query(query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRegionWiseCrimeStats = async (req, res) => {
  try {
    const query = `
      SELECT r.name AS region_name, ct.name AS crime_type, COUNT(c.id) AS crime_count
      FROM crime c
      JOIN location l ON c.location_id = l.id
      JOIN region r ON l.region_id = r.id
      JOIN crime_type ct ON c.type_id = ct.id
      GROUP BY r.name, ct.name
      ORDER BY region_name, crime_count DESC;
    `;
    const [result] = await db.query(query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getHighProfileUnsolvedCases = async (req, res) => {
  try {
    const query = `
      SELECT id, description, status
      FROM crime_case
      WHERE status = 'unsolved'
      ORDER BY id DESC
      LIMIT 10;
    `;
    const [result] = await db.query(query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCrimeRateByTimeOfDay = async (req, res) => {
  try {
    const query = `
      SELECT 
        CASE 
          WHEN HOUR(time_reported) BETWEEN 0 AND 6 THEN 'Midnight - Morning'
          WHEN HOUR(time_reported) BETWEEN 7 AND 12 THEN 'Morning - Noon'
          WHEN HOUR(time_reported) BETWEEN 13 AND 18 THEN 'Afternoon - Evening'
          ELSE 'Evening - Midnight'
        END AS time_period,
        COUNT(*) AS crime_count
      FROM crime
      GROUP BY time_period
      ORDER BY crime_count DESC;
    `;
    const [result] = await db.query(query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRepeatOffenders = async (req, res) => {
  try {
    const query = `
      SELECT name, age, gender, COUNT(*) AS crime_count
      FROM crime_offender
      GROUP BY name, age, gender
      HAVING crime_count > 1
      ORDER BY crime_count DESC;
    `;
    const [result] = await db.query(query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFugitiveOffenders = async (req, res) => {
    try {
      const query = `
        SELECT name, age, gender, status AS offender_status
        FROM crime_offender
        WHERE status = 'fugitive'
        ORDER BY age DESC;
      `;
  
      const [result] = await db.query(query);
      res.json(result);
    } catch (error) {
      console.error("Error fetching fugitive offenders:", error);
      res.status(500).json({ error: error.message });
    }
  };
  
const getMostFrequentCrimeLocations = async (req, res) => {
  try {
    const query = `
      SELECT l.name AS location_name, COUNT(c.id) AS crime_count
      FROM crime c
      JOIN location l ON c.location_id = l.id
      GROUP BY l.name
      ORDER BY crime_count DESC
      LIMIT 5;
    `;
    const [result] = await db.query(query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCrimesWithMostWitnesses = async (req, res) => {
    try {
      const query = `
        SELECT c.id AS crime_id, COUNT(w.id) AS witness_count 
        FROM crime c
        LEFT JOIN crime_witness w ON c.id = w.crime_id
        GROUP BY c.id
        ORDER BY witness_count DESC
        LIMIT 5;
      `;
  
      const [result] = await db.query(query);
      res.json(result);
  
    } catch (error) {
      console.error("Error fetching crimes with most witnesses:", error);
      res.status(500).json({ error: error.message });
    }
  };
  
  const getCrimesWithVictimsAndOffenders = async (req, res) => {
    try {
      const query = `
        SELECT c.id AS crime_id, 
               COUNT(DISTINCT v.id) AS victim_count, 
               COUNT(DISTINCT o.id) AS offender_count
        FROM crime c
        LEFT JOIN crime_victim v ON c.id = v.crime_id
        LEFT JOIN crime_offender o ON c.id = o.crime_id
        GROUP BY c.id
        ORDER BY victim_count DESC, offender_count DESC
        LIMIT 5;
      `;
  
      const [result] = await db.query(query);
      res.json(result);
  
    } catch (error) {
      console.error("Error fetching crimes with victims and offenders:", error);
      res.status(500).json({ error: error.message });
    }
  };

  const getMostCommonOffenderAges = async (req, res) => {
    try {
      const query = `
        SELECT age, COUNT(*) AS count_offenders
        FROM crime_offender
        GROUP BY age
        ORDER BY count_offenders DESC
        LIMIT 5;
      `;
  
      const [result] = await db.query(query);
      res.json(result);
  
    } catch (error) {
      console.error("Error fetching most common offender ages:", error);
      res.status(500).json({ error: error.message });
    }
  };
  


module.exports = {
  getTopCrimeCategory,
  getDangerousLocations,
  getFugitiveOffenders,
  getCrimesWithMostWitnesses,
  getCrimesWithVictimsAndOffenders,
  getMostCommonOffenderAges,
  getMonthlyCrimeTrends,
  getRegionWiseCrimeStats,
  getHighProfileUnsolvedCases,
  getCrimeRateByTimeOfDay,
  getRepeatOffenders,
  getMostFrequentCrimeLocations
};
