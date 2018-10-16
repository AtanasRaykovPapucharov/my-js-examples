const Observable = require('./Rx').Observable
const Observer = require('./Rx').Observer

const array = [1, 2, 3, 4, 5]
const event = document.getElementById('btn').addEventListener('click', (e) => {
    console.log('clicked')
}, false);

const $ = require('jquery')
const url = 'http://ip-api.com/json/'
const request = $.getJSON(url)
.then(location => {
    const coordinates = {
        lat: location.lat,
        lon: location.lon
    }
    return coordinates
})

let observer = new Observer({
    next: (x) => {
        console.log(x)
    },
    error: (err) => {
        console.error(err)
    },
    complete: () => {
        console.log('complete')
    }
})

let observable = new Observable(subscribe => {
    subscribe.next(request)
    subscribe.complete()
})

observable.subscribe(observer)