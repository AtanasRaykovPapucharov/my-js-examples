module.exports = (connectionString) => {
	const mongojs = require("mongojs");

	const collections = ["users", "blogs", "tags"];

	const db = mongojs(connectionString, collections);

	db.on("error", (err) => {
		console.log("Database error!", err);
	})

	db.on("connect", (err) => {
		if (err) {
			console.log("Database connection error!", err);
			return;
		}
		console.log("Database connected!");
	})

	const mongo = {
		api: mongojs,
		db: db
	}

	return mongo;
};
