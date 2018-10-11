const ajaxRequesterAxios = (() => {
	function _sendAjax(method, url, options) {
		options = options || {}
		const request = {
			url: url,
			method: method,
			baseURL: options.baseUrl || '',
			headers: options.headers || {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest'
			},
			params: options.params || {},
			data: options.data,
			responseType: options.responseType || 'json',
			maxContentLength: options.maxContentLength || 200000,
			validateStatus: function (status) {
				return status >= 200 && status < 300
			},
			maxRedirects: options.maxRedirects || 5
		}
		return axios(request)
	}
	return {
		get: (url, options) => {
			return _sendAjax('get', url, options)
		},
		post: (url, options) => {
			return _sendAjax('post', url, options)
		},
		put: (url, options) => {
			return _sendAjax('put', url, options)
		}
	}
})()