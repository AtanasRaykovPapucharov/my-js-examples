module.exports = (dataApi, collectionName) => {
	return {
		getAll: () => {
			return dataApi.getAll(collectionName)
				.then((data) => {
					return data;
				})
				.catch((err) => {
					return { error: err }
				});
		},
		getById: (id) => {
			return dataApi.getById(collectionName, id)
				.then((data) => {
					return data;
				})
				.catch((err) => {
					return { error: err }
				});
		},
		getBySubsection: (subsection) => {
			return dataApi.getBySubsection(collectionName, subsection)
				.then((data) => {
					return data;
				})
				.catch((err) => {
					return { error: err }
				});
		},
		getByName: () => {
			return dataApi.getByName(collectionName, req.params.name)
				.then((data) => {
					return data;
				})
				.catch((err) => {
					return { error: err }
				});
		},
		getByUsername: () => {
			return dataApi.getByUsername(collectionName, req.params.username)
				.then((data) => {
					return data;
				})
				.catch((err) => {
					return { error: err }
				});
		},
		getByEmail: () => {
			return dataApi.getByEmail(collectionName, req.params.email)
				.then((data) => {
					return data;
				})
				.catch((err) => {
					return { error: err }
				});
		},
		post: (obj) => {
			return dataApi.post(collectionName, obj)
				.then((data) => {
					return data;
				})
				.catch((err) => {
					return { error: err }
				});
		}
	}
}