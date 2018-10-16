const path = require('path')

module.exports = () => {
    const Koa = require('koa')

    const statics = require('koa-static')

    const server = new Koa()

    server.use(statics(path.join(__dirname, '../public')))

    const port = 1234

    server.listen(port, () => {
        console.log(`Server is listening on port ${port}`)
    })
}