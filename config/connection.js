const Sequelize = require('sequelize');
require('dotenv').config();
// const { Client } = require('pg');

// Make connection
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

// const sequelize = new Sequelize({
//   connectionString: process.env.DATABASE_URL,
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false
//     }
//   }
// }
// );

console.log("connectionString :: ",sequelize.connectionString);
console.log("dialect :: ",sequelize.dialect);
console.log("process.env.DATABASE_URL :: ",process.env.DATABASE_URL);

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;