module.exports = (mongo) => {
	const REQUESTER = require('../utils/dbRequester')(mongo);

	return {
		getAll: (collectionName) => {
			return REQUESTER.find(collectionName);
		},
		getBySubsection: (collectionName, subsection) => {
			return REQUESTER.find(collectionName, { subsection: subsection });
		},
		getById: (collectionName, id) => {
			return REQUESTER.findOne(collectionName, { _id: mongo.api.ObjectId(id) });
		},
		getByName: (collectionName, name) => {
			return REQUESTER.findOne(collectionName, { name: name });
		},
		getByUsername: (collectionName, name) => {
			return REQUESTER.findOne(collectionName, { username: name });
		},
		getByEmail: (collectionName, email) => {
			return REQUESTER.findOne(collectionName, { email: email });
		},
		post: (collectionName, blog) => {
			return REQUESTER.save(collectionName, blog);
		},
		push: (collectionName, id, dataObj) => {
			let updateObj = { $push: dataObj };
			return REQUESTER.update(collectionName, id, updateObj);
		},
		set: (collectionName, id, dataObj) => {
			let updateObj = { $set: dataObj };
			return REQUESTER.update(collectionName, id, updateObj);
		},
		increase: (collectionName, id, increaseObj) => {
			return REQUESTER.findAndModify(collectionName, id, { $inc: increaseObj });
		},
		pushAndIncrease: (collectionName, id, pushObj, increaseObj) => {
			let updateObj = { $push: pushObj, $inc: increaseObj }
			return REQUESTER.update(collectionName, id, updateObj);
		}
	}
}