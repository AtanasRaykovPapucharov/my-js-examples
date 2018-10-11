const requester = (() => {
	class Requester {
		_sendAjax(method, url, options) {
			options = options || {}

			const headers = options.headers || {},
				data = options.data || {},
				contentType = options.contentType || 'application/json'


			const promise = new Promise((resolve, reject) => {
				$.ajax(url, {
					method,
					contentType: contentType,
					data: JSON.stringify(data),
					headers,
					success: (response) => {
						resolve(response)
					},
					error: (err) => {
						reject(err)
					}
				})
			})

			return promise
		}

		get(url, options) {
			return this._sendAjax('GET', url, options)
		}

		post(url, options) {
			return this._sendAjax('POST', url, options)
		}

		put(url, options) {
			return this._sendAjax('PUT', url, options)
		}

		delete(url, options) {
			return this._sendAjax('DELETE', url, options)
		}
	}

	const req = new Requester()
	return req
})();