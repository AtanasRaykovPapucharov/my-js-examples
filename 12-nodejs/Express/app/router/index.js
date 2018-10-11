module.exports = (express, app, mongo, nodemailer, params, view, data) => {
    const blog = data.blog
    app // api
        .get("/api/static", (req, res) => {
            let staticJSON = require('../config/constants.json')
            res.send(staticJSON)
        })
        .get("/api/blog/:subsection", (req, res) => {
            let subsection = req.params.subsection
            blog.getBySubsection(subsection)
                .then((data) => {
                    res.send({
                        data: data
                    })
                })
        })
        .get("/api/single-blog/:id", (req, res) => {
            let id = req.params.id
            blog.getById(id)
                .then((data) => {
                    res.send({
                        data: data
                    })
                })
        })
        .post("/api/new-post", (req, res) => {
            let dataObj = req.body
            blog.post(dataObj)
                .then((data) => {
                    res.send({
                        data: data
                    })
                })
        })
    app // view frames
        .get("/home", view.home)
        .get("/body-spirit", view.bodySpirit)
        .get("/medicine", view.medicine)
        .get("/arts", view.art)
        .get("/science", view.science)
        .get("/nature", view.nature)
        .get("/society", view.society)
        .get("/technologies", view.tech)
        .get("/extreme", view.extreme)
        .get("/sport", view.sport)
        .get("/admin", view.admin)
        .get("/profile", view.profile)
        .get("*", (req, res) => {
            res.redirect("/home")
        })
}