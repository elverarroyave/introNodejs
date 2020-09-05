const Sequalize = require("sequelize");
require("dotenv").config({ path: "variables.env" });

// console.log(process.env.BD_NOMBRE);

module.exports = new Sequalize(
  process.env.BD_NOMBRE,
  process.env.USER,
  process.env.PASS,
  {
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: "mysql",
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    operatorsAliases: false,
  }
);
