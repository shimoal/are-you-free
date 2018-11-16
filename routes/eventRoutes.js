const Event = require("../db/models/Event");
const uniqid = require("uniqid");

module.exports = app => {
	app.get("/api/events", (req, res) => {
		res.send("Events");
	});

	app.post("/api/events/new", async (req, res) => {
		const {
			body: { createdBy, title, eventType }
		} = req;

		const linkID = uniqid();
		console.log("linkID", linkID);

		const event = await Event.create({
			createdBy: createdBy,
			title: title,
			eventType: eventType,
			linkID
		});

		try {
			const newEvent = await event.save();
			res.send(newEvent);
		} catch (error) {
			res.send(error);
		}
	});
};
