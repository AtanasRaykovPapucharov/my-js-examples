module.exports = {
    development: {
        db: 'mongodb://admin:1qazxsw2@ds163060.mlab.com:63060/webdjsdatabase' || 'mongodb://localhost/koa-room',
        port: 3333
    },
    production: {
        db: 'mongodb://admin:1qazxsw2@ds163060.mlab.com:63060/webdjsdatabase',
        port: process.env.PORT
    }
}