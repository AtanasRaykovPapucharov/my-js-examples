module.exports = (params) => {
	const nodemailer = require("nodemailer")
	const transporter = nodemailer.createTransport(params.transporterConnectionString)
	transporter.verify((err, success) => {
		if (err) {
			console.log(err)
			return
		}
		console.log("Server is ready to send e-mail messages!")
	})
	return {
		transporter,
		nodemailer
	}
}