module.exports.init = (mongoose) => {
    const Schema = mongoose.Schema
    const ObjectId = Schema.ObjectId

    const user = new Schema({
        _id: ObjectId,
        username: String,
        email: String,
        password: String,
        key: String,
        token: String,
        image: String,
        presentation: String,
        interests: [String],
        date: Date
    })

    const User = mongoose.model('User', user)
}