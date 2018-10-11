const templateLoader = (() => {
	class TemplateLoader {
		_compile(templateUrl) {
			return new Promise((resolve, reject) => {
				$.get(templateUrl, (htmlTemplate) => {
					let compiledTemplate = Handlebars.compile(htmlTemplate)
					resolve(compiledTemplate)
				})
			})
		}

		load(selector, templateUrl, data) {
			let selectedItem = $(selector)
			data = data || Object

			return this._compile(templateUrl).then((compiledTemplate) => {
				selectedItem.html(compiledTemplate(data))
			})
		}
	}

	const tempLoader = new TemplateLoader()
	return tempLoader
})()