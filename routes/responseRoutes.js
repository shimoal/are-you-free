const {Event, Response, ResponseOption} = require("../db/models/Models");

module.exports = app => {
	app.get("/api/responses/:eventId", async (req, res) => {
		const {eventId} = req.params;

		try {
			const responses = await Response.findAll({
				where: {
					eventId
				}
			});
			res.send(responses);
		} catch (error) {
			res.send(error);
		}
	});

	app.post("/api/response", async (req, res) => {
		const { body: { name, eventId, options }} = req;
		
		try {
			const response = await Response.create({
				name,
				eventId
			});

			const newResponse = await response.save();

			for (option of options) {
				let response_option = await ResponseOption.create({
					optionId: option.id,
					responseId: response.dataValues.id,
					choice: option.choice

				});
				await response_option.save();
			}
			
			res.send(newResponse);
		} catch (error) {
			res.send(error);
		}
	})
}