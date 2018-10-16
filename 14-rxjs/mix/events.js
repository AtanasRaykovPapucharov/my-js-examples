const $ = require('jquery')
const {
    fromEvent
} = require('rxjs')

const target = $(document)
const eventName = ['click', 'scroll', 'mouseover']
let eventList = []
eventName.forEach(evName => {
    eventList.push(fromEvent(target, evName))
})

let eventAction = {
    click: target => {
        console.log(`Target: ${target} onClick`)
    },
    scroll: target => {
        console.log(`Target: ${target} onScroll`)
    },
    mouseover: target => {
        console.log(`Target: ${target} onMouseOver`)
    }
}

eventList.forEach(e => {
    e.subscribe(e => {
        let evType = e.type
        let evTarget = e.target
        if (eventAction[evType]) {
            eventAction[evType](evTarget.className)
        }
    })
})