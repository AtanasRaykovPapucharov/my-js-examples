const constantz = require('./constants.json');

module.exports = {
	development: {
		db: constantz.mongodbConnection || 'mongodb://localhost:27017/appdb',
		port: 3338,
		// nodemailerAppEmail: constantz.appEmail,
		// nodemailerSubject: constantz.appSubject,
		// nodemailerText: constantz.appTextEmail,
		// nodemailerHtml:
		// `<div>
		// </div>`,
		transporterConnectionString: constantz.transporterConnection,
		sessionSecret: 'session-secret',
		webTokenSecret: 'web-token-secret',
		cookieName: 'cookie-name'
	},
	production: {
		db: constantz.mongodbConnection,
		port: process.env.PORT,
		// nodemailerAppEmail: constantz.appEmail,
		// nodemailerSubject: constantz.appSubject,
		// nodemailerText: constantz.appTextEmail,
		// nodemailerHtml:
		// `<div>
		// </div>`,
		transporterConnectionString: process.env.SMTP_INFO,
		sessionSecret: process.env.SESSION_SECRET,
		webTokenSecret: process.env.WEB_TOKEN_SECRET,
		cookieName: process.env.COOKIE_NAME
	}
}
