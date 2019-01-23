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
	},
	linkID: {
		type: Sequelize.STRING
	}
});

const Option = db.define("option", {
	label: {
		type: Sequelize.STRING
	}
});

Option.Event = Option.belongsTo(Event);
Event.Options = Event.hasMany(Option);

db.sync();

module.exports = Event;
