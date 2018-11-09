const database = require("./models");

database.sequelize
	.sync()
	.then(function(err) {
		console.log("Connection has been established successfully.");
	})
	.catch(function(err) {
		console.log("Unable to connect to the database:", err);
	});

module.exports = database;
