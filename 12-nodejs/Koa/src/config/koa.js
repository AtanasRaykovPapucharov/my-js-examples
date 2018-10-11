const path = require('path')
const fs = require('fs')
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../access.log'), {
    flags: 'a'
})
const statics = require('koa-static')
const cors = require('koa-cors')
const morgan = require('koa-morgan')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
const passport = require('koa-passport')
const render = require('koa-ejs')

module.exports = (app, router, controller) => {
    // Access Logger Middleware
    app.use(morgan('combined', { stream: accessLogStream }))
    
    // Cross-Origin Resource Sharing Middleware
    app.use(cors())

    // Static Middleware
    app.use(statics(path.join(__dirname, '../public')))

    // BodyParser Middleware
    app.use(bodyParser())

    // Sessions
    app.keys = ['secret']
    app.use(session({}, app))

    // Passport Auth Middleware
    app.use(passport.initialize())
    app.use(passport.session())

    // Additional properties to context
    app.context.appName = 'Koa'

    // HTML Templates Views
    render(app, {
        root: path.join(__dirname, '../views'),
        layout: 'layout',
        viewExt: 'html',
        cache: false,
        debug: false
    })

    // Routes
    require('./routes').Renderer(router, controller)

    // Router Middleware
    app.use(router.routes()).use(router.allowedMethods())
}