const Sequelize = require("sequelize");
const db = require("../database");

const Event = db.define("event", {
	createdBy: {
		type: Sequelize.STRING
	},
	title: {
		type: Sequelize.STRING
	},
	eventType: {
		type: Sequelize.STRING
	}
});

db.sync();

module.exports = Event;
