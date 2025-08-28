require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

console.log("Password type:", typeof process.env.DB_PASSWORD);
console.log("Password value:", process.env.DB_PASSWORD);

pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to databases. Please check:', err);
  } else {
    console.log('Connected to database successfully!');
    release();
  }
  pool.end();
});
