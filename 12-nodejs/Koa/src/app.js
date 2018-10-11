module.exports = () => {
    // Environment
    const env = process.env.NODE_ENV || 'development'
    const params = require('./config')[env]

    // Mongo DB
    const mongoose = require('mongoose')
    const dbConnection = params.db

    require('./config/mongoose')(mongoose, dbConnection)

    // App
    const Koa = require('koa')
    const KoaRouter = require('koa-router')

    const app = new Koa()
    const router = new KoaRouter()
    const data = require('./data')(mongoose)
    const controller = require('./controller')(data)

    require('./config/koa')(app, router, controller)

    const port = params.port
    app.listen(port, () => console.log(`Server is running on port: ${port}`))
}