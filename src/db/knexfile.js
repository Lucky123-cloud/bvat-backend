require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const path = require('path');

// Destructure after dotenv has run
const {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
} = process.env;

console.log("DB_USER:", process.env.DB_USER, "DB_NAME:", process.env.DB_NAME, "DB_PASSWORD:", typeof process.env.DB_PASSWORD);


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
      directory: path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'seeds'),
    },
  },
};
