const sql = require("mssql");

const config = {
  user: 'sa',
  password: 'hobenavai',
  server: 'LAPTOP-U0BH4GBH',
  port : 1433,
  database: 'CrimeSentinel',
  
  options: {
    encrypt: false, 
    trustServerCertificate: true,
    trustedConnection: false
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("Connected to SQL Server");
    return pool;
  })
  .catch((err) => console.error("Database connection failed:", err));

module.exports = {
  sql,
  poolPromise,
};
