const { Pool } = require('pg');

async function bootDb() {
  const pool = new Pool({
    connectionString: process.env.DB_CONNECTION_URL,
  });
  await pool.connect();
  console.log('Connected to DB');
  return pool;
}

module.exports = bootDb;
