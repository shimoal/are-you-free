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
	},
	description: {
		type: Sequelize.STRING
	}
});

const Option = db.define("option", {
	label: {
		type: Sequelize.STRING
	}
});

const Response = db.define("response", {
	name: {
		type: Sequelize.STRING
	}
});

const ResponseOption = db.define("response_option", {
	choice: {
		type: Sequelize.STRING
	}
});

Option.Event = Option.belongsTo(Event);
Event.Options = Event.hasMany(Option);

Response.Event = Response.belongsTo(Event);
Event.Responses = Event.hasMany(Response);

Response.belongsToMany(Option, {through: ResponseOption});
Option.belongsToMany(Response, {through: ResponseOption});

db.sync();

module.exports = {Event, Option, Response, ResponseOption};