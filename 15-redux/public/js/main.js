const Redux = require('redux')
const {
    fromEvent
} = require('rxjs')
const $ = require('jquery')
const TemplateLoader = require('./template-loader')
const template = new TemplateLoader($)
const placeholderId = '#content'

const view = {
    js: () => {
        return template.load(placeholderId, './templates/js.html')
    },
    node: () => {
        return template.load(placeholderId, './templates/node.html')
    },
    front: () => {
        return template.load(placeholderId, './templates/front.html')
    }
}

const initialState = {
    value: 'js'
}

view[initialState.value]()

const reducer = (state = initialState, action) => {
    state.value = action.type.toLowerCase()
    return state
}

const store = Redux.createStore(reducer)

const action = {
    js: {
        type: "JS"
    },
    node: {
        type: "NODE"
    },
    front: {
        type: "FRONT"
    }
}

$('.wrapper header .nav ul *').on('click', (e) => {
    e.preventDefault()
    let actionType = e.target.className
    let act = action[actionType]

    store.dispatch(act)
})

store.subscribe(() => {
    let type = store.getState().value
    return view[type]().then(() => {
        $(`.wrapper header .nav ul li`).css('border', '2px solid black')
        $(`.wrapper header .nav ul li.${type}`).css('border', '2px solid white')
    })
})

store.subscribe(() => {
    let type = store.getState().value
    console.log(type)
})