const Sequelize = require("sequelize");
const config = require("../db_config");

const { db, username, password, host, port } = config;

const sequelize = new Sequelize(db, username, password, {
	host,
	port,
	dialect: "postgres"
});

const models = {
	Event: sequelize.import("./Event")
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
