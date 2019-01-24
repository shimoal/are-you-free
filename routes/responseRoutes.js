const {Event, Response} = require("../db/models/Models");

module.exports = app => {
	app.post("/api/response", async (req, res) => {
		const { body: { name, eventId, options }} = req;

		try {
			const response = await Response.create({
				name,
				eventId
			});

			const newResponse = await response.save();
			
			res.send(newResponse);
		} catch (error) {
			res.send(error);
		}
	})
}