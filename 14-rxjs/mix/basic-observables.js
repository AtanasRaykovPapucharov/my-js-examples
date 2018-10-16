const $ = require('jquery')
const Rx = require('rxjs')

const Observable = Rx.Observable

const from = Rx.from

const numbers = [1, 2, 6, 8, 9, 8, 5, 7]

//==================================================

from(numbers).subscribe(n => {
    console.log(n)
})

//==================================================

const subscriber = observer => {
    numbers.forEach(n => observer.next(n))
    observer.complete()
}

const observable = Observable.create(subscriber)

observable.subscribe(n => {
    console.log(n * 2)
})

//==================================================

// Requests
let getIP = 'http://ip-api.com/json/'
let req = $.getJSON(getIP)
Observable.create(subscriber => {
    subscriber.next(req)
    subscriber.complete()
}).subscribe(n => {
    console.log(n)
})

//==================================================

// Events
const fromEvent = Rx.fromEvent
const target = $('#btn')
const eventName = 'click'

fromEvent(target, eventName)
    .subscribe(
        e => {
            console.log(e.target)
        }
    )

//==================================================