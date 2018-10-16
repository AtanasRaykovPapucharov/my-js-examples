const $ = require('jquery')
const Observable = require('rxjs').Observable

const url = 'http://ip-api.com/json/'
const openWeatherMap = 'http://api.openweathermap.org/data/2.5/forecast?weather&APPID=a2fbadee2a015fcf7272ac811ff340e1'

const weather = coordinates => {
    const reqWeather = $.getJSON(openWeatherMap, coordinates)
        .then(weather => {
            const weatherCity = weather.city
            const weatherList = weather.list
            const weatherCurrentObj = weather.list[0]
            console.log(weatherCity)
            console.log(weatherList)
            console.log(weatherCurrentObj)
        })
    return Observable.create(subscriber => {
        subscriber.next(reqWeather)
        subscriber.complete()
    })
}
const request = $.getJSON(url)
    .then(location => {
        const coordinates = {
            lat: location.lat,
            lon: location.lon
        }
        weather(coordinates).subscribe
    })

const locationObservable = Observable.create(subscriber => {
    subscriber.next(request)
    subscriber.complete()
})

locationObservable.subscribe



// const reqLocation = $.getJSON(getIP)
// const weather = coordinates => {
//     const reqWeather = $.getJSON(openWeatherMap, coordinates)
//     return Observable.create(subscriber => {
//         subscriber.next(reqWeather)
//         subscriber.complete()
//     })
// }

// const getLocation = Observable.create(subscriber => {
//     subscriber.next(reqLocation)
//     subscriber.complete()
// })

// getLocation.subscribe(resp => {
//     resp
//         .then(location => {
//             const coordinates = {
//                 lat: location.lat,
//                 lon: location.lon,
//                 units: 'metric'
//             }
//             return coordinates
//         })
//         .then(coordinates => {
//             weather(coordinates).subscribe(msg => {
//                 msg.then(weather => {
//                     const weatherCity = weather.city
//                     const weatherList = weather.list
//                     const weatherCurrentObj = weather.list[0]
//                     console.log(weatherCity)
//                     console.log(weatherList)
//                     console.log(weatherCurrentObj)
//                 })
//             })
//         })
// })