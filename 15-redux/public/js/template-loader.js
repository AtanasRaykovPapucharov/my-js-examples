const Handlebars = require('handlebars')

class TemplateLoader {
    constructor($) {
        this._$ = $
    }
    _compile(templateUrl) {
        return new Promise((resolve, reject) => {
            this._$.get(templateUrl, (htmlTemplate) => {
                let compiledTemplate = Handlebars.compile(htmlTemplate)
                resolve(compiledTemplate)
            })
        })
    }

    load(selector, templateUrl, data) {
        let selectedItem = this._$(selector)
        data = data || Object

        return this._compile(templateUrl)
            .then((compiledTemplate) => {
                selectedItem.html(compiledTemplate(data))
            })
    }
}

module.exports = TemplateLoader