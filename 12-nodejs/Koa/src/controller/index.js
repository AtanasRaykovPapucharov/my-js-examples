module.exports = (data) => {
    const render = require('./renderer')(data)
    const videos = require('./videos')(data)
    return {
        render, videos
    }
}