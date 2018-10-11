module.exports = (mongo) => {
    let staticData = require("../data/static/static.json")
    return {
        home: (req, res, next) => {
            res.render("./pug/home", {
                data: staticData.home,
                tag: "home"
            });
        },
        bodySpirit: (req, res, next) => {
            res.render("./pug/main-collection", {
                data: staticData.bodySpirit,
                tag: "ТЯЛО И ДУХ"
            });
        },
        medicine: (req, res, next) => {
            res.render("./pug/main-collection", {
                data: staticData.medicine,
                tag: "МЕДИЦИНА"
            });
        },
        art: (req, res, next) => {
            res.render("./pug/main-collection", {
                data: staticData.art,
                tag: "ИЗКУСТВО"
            });
        },
        society: (req, res, next) => {
            res.render("./pug/main-collection", {
                data: staticData.society,
                tag: "ОБЩЕСТВО"
            });
        },
        science: (req, res, next) => {
            res.render("./pug/main-collection", {
                data: staticData.science,
                tag: "НАУКА"
            });
        },
        tech: (req, res, next) => {
            res.render("./pug/main-collection", {
                data: staticData.tech,
                tag: "ТЕХНОЛОГИИ"
            });
        },
        nature: (req, res, next) => {
            res.render("./pug/main-collection", {
                data: staticData.nature,
                tag: "ПРИРОДА"
            });
        },
        extreme: (req, res, next) => {
            res.render("./pug/main-collection", {
                data: staticData.extreme,
                tag: "ЕКСТРЕМНО"
            });
        },
        sport: (req, res, next) => {
            res.render("./pug/main-collection", {
                data: staticData.sport,
                tag: "СПОРТ"
            });
        },
        profile: (req, res, next) => {
            res.render("./pug/profile", {

            });
        },
        admin: (req, res, next) => {
            res.render("./pug/admin", {

            });
        }
    }
}