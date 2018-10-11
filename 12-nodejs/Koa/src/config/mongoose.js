const UserModel = require('../data/models/User')
const VideoModel = require('../data/models/Video')

module.exports = (mongoose, connectionString) => {
    mongoose.connect(connectionString, {
        useNewUrlParser: true
    })
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'DB connection error: '))
    db.on('connected', () => {
        console.log('DB connected!')
    })
    db.on('disconnected', () => {
        console.log('DB disconnected!')
    })

    UserModel.init(mongoose)
    VideoModel.init(mongoose)
}