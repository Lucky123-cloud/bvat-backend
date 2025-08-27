require('dotenv').config();
const path = require('path');

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: DB_HOST,
      port: DB_PORT,
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
    },
    migrations: {
      directory: path.join(__dirname, 'migrations'), // Correct path
    },
    seeds: {
      directory: path.join(__dirname, 'seeds'), // Correct path
    },
  },
};