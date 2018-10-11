const view = {
	antre: (selectorId, data) => {
		return templateLoader.load(selectorId, './templates/antre.html', data)
	},
	addNew: (selectorId, data) => {
		return templateLoader.load(selectorId, './templates/add-new.html', data)
	},
	blog: (selectorId, data) => {
		return templateLoader.load(selectorId, './templates/blog.html', data)
	},
	loader: (selectorId, data) => {
		return templateLoader.load(selectorId, './templates/loader.html', data)
	},
	chess: (selectorId, data) => {
		return templateLoader.load(selectorId, './games/chess/chess.html', data)
	},
	map: (selectorId, data) => {
		return templateLoader.load(selectorId, './templates/map.html', data)
	},
	auth: (selectorId, data) => {
		return templateLoader.load(selectorId, './templates/auth.html', data)
	}
}