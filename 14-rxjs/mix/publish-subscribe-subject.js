const Observable = require('rxjs').Observable
const Subject = require('rxjs').Subject
const $ = require('jquery')

const numbers = [1, 2, 3, 3, 4, 77, 5, 5, 5, 6, 6, 7, 2, 111, 3]

// RxJS
const subscriber = observer => {
    numbers.forEach(n => {
            observer.next(n)
        })
    observer.complete()
}

const publisher = Observable.create(subscriber)

const subscription = publisher.subscribe({
    next: n => {
        console.log(n);
        $('ul#list').append(`<li>The number is ${n}</li>`)
    },
    error: err => {
        console.log(err)
    },
    complete: () => {
        console.log('complete')
    }
})

const subject = Subject.create(subscription, publisher)
subject.next()