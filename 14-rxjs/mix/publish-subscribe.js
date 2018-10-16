const Observable = require('rxjs').Observable
const $ = require('jquery')

const numbers = [1, 2, 3, 3, 4, 77, 5, 5, 5, 6, 6, 7, 2, 111, 3]

// RxJS
const subscriber = observer => {
    observer.next(numbers)
    observer.complete()
}

const publisher = Observable.create(subscriber)

const subscription = () => {
    return publisher.subscribe(
        numbers => {
            numbers.forEach(n => {
                    $('ul#list').append(`<li>The number is ${n}</li>`)
                })
        },
        err => {
            console.log(err)
        },
        () => {
            console.log('complete')
        }
    )
}
subscription()
