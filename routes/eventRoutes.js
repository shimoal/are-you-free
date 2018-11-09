module.exports = app => {
	app.get("/events", (req, res) => {
		res.send("Events");
	});

	app.post("/events/new", (req, res) => {
		res.send("new Event");
	});
};
