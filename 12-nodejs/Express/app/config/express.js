module.exports = (express, app, params) => {
	const path = require("path");
	
	app.set("view engine", "pug");
	app.set("views", path.join(__dirname, "../views"));

	app.disable("x-powered-by");

	const morgan = require('morgan');
	app.use(morgan('combined'));

	const helmet = require("helmet");
	app.use(helmet({
		frameguard: {
			action: "deny"
		}
	}))

	const cors = require("cors");
	app.use(cors());

	const bodyParser = require("body-parser");
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: false
	}));

	const cookieParser = require("cookie-parser");
	app.use(cookieParser());

	const session = require("express-session");
	const sessionObj = {
		secret: params.sessionSecret,
		resave: true,
		saveUninitialized: true
	}
	app.use(session(sessionObj));

	app.use("/", express.static(path.join(__dirname, "../client")));
}