const {Event, Response} = require("../db/models/Models");

module.exports = app => {
	app.post("/api/event/:linkID", async (req, res) => {
		const { body: { name, eventId }} = req;

		try {
			const response = await Response.create({
				name,
				eventId
			});

			const newResponse = await response.save();
			
			res.send(newResponse);
		} catch (error) {
			console.log('ERROR:', error);
			res.send(error);
		}
	})
}