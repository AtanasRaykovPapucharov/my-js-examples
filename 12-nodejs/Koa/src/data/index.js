module.exports = (mongoose) => {
    const User = require('./collections/users')(mongoose)
    const Video = require('./collections/videos')(mongoose)

    return {
        User,
        Video
    }
}