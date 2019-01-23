const Event = require("../db/models/Event");
const Option = require("../db/models/Option")
const uniqid = require("uniqid");

module.exports = app => {
	app.get("/event/:linkID", async (req, res) => {
		const {linkID} = req.params;
		try {
			const event = await Event.findOne({	
				where: {
					linkID
				}
			});
			res.send(event);
		} catch (error) {
			res.send(error);
		}
	});

	app.get("/api/events", (req, res) => {
		res.send("Events");
	});

	app.post("/api/events/new", async (req, res) => {
		const {
			body: { createdBy, title, eventType }
		} = req;

		const linkID = uniqid();



		try {
			try {
				const event = await Event.create({
				createdBy: createdBy,
				title: title,
				eventType: eventType,
				linkID,
				options: [
					{
						label: "Default Option"
					}
				]
				}, {
					include: [ {
						association: Event.Options
					} ]
				});
			} catch (error) {
				console.log('error:', error)
				res.send(error)
			}
			const newEvent = await event.save();
			
			res.send(newEvent);
		} catch (error) {
			res.send(error);
		}
	});
};
