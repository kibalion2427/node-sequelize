const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-shop", "root", "Mejia2427*", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
