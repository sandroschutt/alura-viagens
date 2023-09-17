require('dotenv').config();
const { Sequelize } = require("sequelize");

const database = process.env.DB;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

const sequelize = new Sequelize(database, username, password, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
});

module.exports=sequelize