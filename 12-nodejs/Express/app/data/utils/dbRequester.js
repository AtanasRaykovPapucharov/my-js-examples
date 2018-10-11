module.exports = (mongo) => {
	function _move(method, collection, queryObj) {
		collection = collection || "";
		if (typeof queryObj === 'string' || queryObj instanceof String) {
			queryObj = { _id: mongo.api.ObjectId(queryObj) };
		}

		return new Promise((resolve, reject) => {
			mongo.db[collection][method](queryObj, (err, obj) => {
				if (err) {
					reject(err);
				}
				resolve(obj);
			})
		});
	}

	function _modify(method, collection, queryObj, ubdateObj) {
		collection = collection || "";
		if (typeof queryObj === 'string' || queryObj instanceof String) {
			queryObj = { _id: mongo.api.ObjectId(queryObj) };
		}
		ubdateObj = ubdateObj || {};

		return new Promise((resolve, reject) => {
			mongo.db[collection][method]({
				query: queryObj,
				update: ubdateObj,
				new: true
			}, (err, obj) => {
				if (err) {
					reject(err);
				}
				resolve(obj);
			})
		});
	}

	function _update(method, collection, queryObj, ubdateObj) {
		collection = collection || "";
		if (typeof queryObj === 'string' || queryObj instanceof String) {
			queryObj = { _id: mongo.api.ObjectId(queryObj) };
		}

		return new Promise((resolve, reject) => {
			mongo.db[collection][method](queryObj, ubdateObj, {}, (err, obj) => {
				if (err) {
					reject(err);
				}
				resolve(obj);
			})
		});
	}

	return {
		find: (collection, queryObj) => {
			return _move("find", collection, queryObj)
		},
		findOne: (collection, queryObj) => {
			return _move("findOne", collection, queryObj)
		},
		save: (collection, dataObj) => {
			return _move("save", collection, dataObj)
		},
		findAndModify: (collection, queryObj, updateObj) => {
			return _modify("findAndModify", collection, queryObj, updateObj)
		},
		update: (collection, id, updateObj) => {
			return _update("update", collection, queryObj, updateObj)
		}
	}
};