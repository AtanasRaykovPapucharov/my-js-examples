module.exports = (mongo) => {
	const collection = { USERS: 'users', BLOGS: 'blogs', GAMES: 'games' }
	const collectionData = require('./service/api')(mongo)
	
	const blog = require('./service/collections')(collectionData, collection.BLOGS)
	const user = require('./service/collections')(collectionData, collection.USERS)

	return {
		blog
	}
}