module.exports.Renderer = (router, controller) => {
    router.get('/', controller.render.index)
    router.get('/home', controller.render.home)
    router.get('/show-name/:name', controller.render.showName)

    router.get('/add', controller.render.showAdd)
    router.post('/add', controller.render.add)
}

module.exports.REST = {
    
}