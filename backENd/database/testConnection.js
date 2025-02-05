const { sql, poolPromise } = require("./db");

async function testConnection() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT 1 AS test");
    console.log("SQL Server Connected:", result.recordset);
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

testConnection();
