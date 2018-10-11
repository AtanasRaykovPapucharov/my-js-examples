module.exports = (mongoose) => {
    const Video = mongoose.model('Video')

    return {
        getAll:async () => {
            return new Promise((resolve, reject) => {
                Video.find({}, (err, data) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(data)
                })
            })
        }
    }
}