const event = (sequelize, DataTypes) => {
	const Event = sequelize.define("event", {
		createdBy: {
			type: DataTypes.STRING
		},
		title: {
			type: DataTypes.STRING
		},
		eventType: {
			type: DataTypes.STRING
		}
	});
};

module.exports = event;
