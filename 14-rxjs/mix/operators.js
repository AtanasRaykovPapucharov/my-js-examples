const $ = require('jquery')
const {
    Observable,
    Subject,
    ReplaySubject,
    from,
    fromEvent,
    of ,
    range
} = require('rxjs')
const {
    map,
    filter,
    mapTo,
    switchMap,
    zip,
    zipAll,
    merge,
    multicast
} = require('rxjs/operators')

const array = [1, 3, 5, 7, 9, 12]

Observable.create(subscriber => {
        array.forEach(m => {
            subscriber.next(m)
        })
        subscriber.complete()
    })
    .pipe(map(x => x * 3), filter(x => x % 2 === 1))
    .subscribe(
        v => {
            console.log(v)
        },
        e => {
            console.log(e)
        },
        () => {
            console.log('complete')
        }
    )