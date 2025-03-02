const pool = require('../config/database');

const getAllReports = async (req, res) => {
    try {
        const { crimeType, crimeCategory, location } = req.query;

        let query = `
            SELECT cr.id, cr.date, cr.crimeTitle, cr.crimeDetails, c.id AS crimeId, 
                   ct.name AS crimeType, cc.name AS crimeCategory, l.name AS location
            FROM crime_report cr
            JOIN crime c ON cr.crime_id = c.id
            JOIN crime_type ct ON c.type_id = ct.id
            JOIN crime_category cc ON ct.category_id = cc.id
            JOIN location l ON c.location_id = l.id
        `;

        // Add filtering conditions if query parameters are provided
        const conditions = [];
        if (crimeType) {
            conditions.push(`ct.name = '${crimeType}'`);
        }
        if (crimeCategory) {
            conditions.push(`cc.name = '${crimeCategory}'`);
        }
        if (location) {
            conditions.push(`l.name = '${location}'`);
        }

        if (conditions.length > 0) {
            query += ` WHERE ${conditions.join(' AND ')}`;
        }

        query += ` ORDER BY cr.date DESC`;

        const [results] = await pool.query(query);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getSingleReport = async (req, res) => {
    try {
        let reportId = req.params.id;

        console.log("Received reportId:", reportId);

        if (!reportId) {
            return res.status(400).json({ error: 'Report ID is required' });
        }

        reportId = parseInt(reportId, 10);

        if (isNaN(reportId)) {
            return res.status(400).json({ error: 'Invalid Report ID' });
        }

        const query = `
            SELECT cr.id, cr.date, cr.crimeTitle, cr.crimeDetails, c.id AS crimeId, 
                   ct.name AS crimeType, cc.name AS crimeCategory, l.name AS location
            FROM crime_report cr
            JOIN crime c ON cr.crime_id = c.id
            JOIN crime_type ct ON c.type_id = ct.id
            JOIN crime_category cc ON ct.category_id = cc.id
            JOIN location l ON c.location_id = l.id
            WHERE cr.id = ${reportId}
        `;

        console.log("Executing query:", query, "with reportId:", reportId);

        const [results] = await pool.query(query, [reportId]);

        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ error: 'Report not found' });
        }
    } catch (error) {
        console.error("Error fetching single report:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { getAllReports, getSingleReport };