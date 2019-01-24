const Sequelize = require("sequelize");
const config = require("../db_config");
const database = require('../database');

const { db, username, password, host, port } = config;

const sequelize = new Sequelize(db, username, password, {
	host,
	port,
	dialect: "postgres"
});

module.exports = sequelize;
