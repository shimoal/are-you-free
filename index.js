const express = require("express");
const app = express();
const db = require("./db/database.js");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

require("./routes/eventRoutes")(app);
require("./routes/responseRoutes")(app);

if (process.env.NODE_ENV === "production") {
	// serve production assests
	app.use(express.static("client/build"));
	// serve html file if non specified route
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
