const Event = require("../db/models/Event");

module.exports = app => {
	app.get("/events", (req, res) => {
		res.send("Events");
	});

	app.post("/events/new", async (req, res) => {
		const {
			body: { createdBy, title, eventType }
		} = req;

		const event = await Event.create({
			createdBy: createdBy,
			title: title,
			eventType: eventType
		});

		try {
			const newEvent = await event.save();
			res.send(newEvent);
		} catch (error) {
			res.send(error);
		}
	});
};
