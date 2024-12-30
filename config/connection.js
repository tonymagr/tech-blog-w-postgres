const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: 'localhost',
    // host: '127.0.0.1',
    dialect: 'postgres',
    port: 5432,
  }
);

module.exports = sequelize;
