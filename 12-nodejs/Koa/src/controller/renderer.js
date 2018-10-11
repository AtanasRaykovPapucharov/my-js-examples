
module.exports = (data) => {
    const progLanguages = ['JavaScript', 'Lua', 'Python', 'C', 'Go']

    return {
        index: async (ctx) => {
            await ctx.redirect('/home')
        },
        home: async (ctx) => {
            await ctx.render('home', {
                title: 'Home Programming languages:',
                progLangs: progLanguages
            })
        },
        showName: async (ctx) => {
            const nameParam = ctx.params.name
            await ctx.render('show-name', {
                nameMsg: `The name is ${nameParam}`
            })
        },
        showAdd: async (ctx) =>{
            await ctx.render('add-form')
        },
        add: async (ctx) => {
            const body = ctx.request.body
            await ctx.render('add-info', {
                appName: ctx.appName,
                info: JSON.stringify(body)
            })
        }
    }
}