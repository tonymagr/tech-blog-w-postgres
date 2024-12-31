const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,

  {
    connectionString: process.env.DATABASE_URL,
    host: 'localhost',
    // host: '127.0.0.1',
    dialect: 'postgres',
    port: 5432,
    ssl: true
  }
);

console.log("connectionString",connectionString);

module.exports = sequelize;
