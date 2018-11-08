const Sequelize = require("sequelize");
const config = require("./db_config");

const { db, username, password, host, port } = config;

const database_config = new Sequelize(db, username, password, {
	host,
	port,
	dialect: "postgres",
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

module.exports = database_config;
