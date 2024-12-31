const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


// const Sequelize = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(
//   process.env.DATABASE,
//   process.env.USER,
//   process.env.PASSWORD,

//   {
//     host: 'localhost',
//     // host: '127.0.0.1',
//     dialect: 'postgres',
//     port: 5432,
//     ssl: true
//   }
// );

// console.log("connection url:: ",process.env.DATABASE_URL);
// console.log("connectionString:: ",pool.connectionString);

// module.exports = sequelize;
