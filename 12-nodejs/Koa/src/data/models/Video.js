module.exports.init = (mongoose) => {
    const Schema = mongoose.Schema
    const ObjectId = Schema.ObjectId

    const video = new Schema({
        _id: ObjectId,
        section: String,
        subsection: String,
        title: String,
        subtitle: String,
        video: String,
        image: String,
        content: String,
        tagField: String,
        tags: [String],
        looks: Number,
        likes: Number,
        date: Date,
        author: String
    })

    const Video = mongoose.model('Video', video)
}