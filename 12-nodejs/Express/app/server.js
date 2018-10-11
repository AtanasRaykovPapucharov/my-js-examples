module.exports = {
    init: (() => {
        const express = require("express")
        const app = express()
        const env = process.env.NODE_ENV || "development"
        const params = require("./config/")[env]
        require("./config/express")(express, app, params)
        const dbConnect = params.db
        const mongo = require("./config/mongo")(dbConnect)
        const views = require("./views")(mongo)
        const nodemailer = require("./config/nodemailer")(params)
        const data = require("./data")(mongo)
        require("./router")(express, app, mongo, nodemailer, params, views, data)
        const port = params.port
        app.listen(port)
        console.log(`Server running on port:${port}`)
    })()
}