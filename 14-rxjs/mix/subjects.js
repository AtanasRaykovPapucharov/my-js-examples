const {
    Observable,
    Subject,
    ReplaySubject,
    interval
} = require('rxjs')

const subject = new ReplaySubject()

subject.next(1)

subject.subscribe(value => {
    console.log(value)
})
subject.next(2)
subject.next(3)