const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  idleTimeoutMillis: 30000, 
  connectionTimeoutMillis: 20000,
  ssl: {
    rejectUnauthorized: false, 
  },
});

module.exports = pool;