const Event = require("../db/models/Event");

module.exports = app => {
	app.get("/events", (req, res) => {
		res.send("Events");
	});

	app.post("/events/new", async (req, res) => {
		const event = await Event.create({
			createdBy: "me",
			title: "New Title",
			eventType: "Daily"
		});

		try {
			const newEvent = await event.save();
			res.send(newEvent);
		} catch (error) {
			res.send(error);
		}
	});
};
