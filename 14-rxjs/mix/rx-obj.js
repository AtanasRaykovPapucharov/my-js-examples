const Rx = require('rxjs')

const Observable = Rx.Observable

const rxObj = (object, func, err, complete) => {
    func = func || console.log
    err = err || console.err
    complete = complete || console.log('complete')

    return Observable.create(subscriber => {
            subscriber.next(object)
            subscriber.complete()
        })
        .subscribe(
            v => {
                return func(v)
            },
            e => {
                return err(e)
            },
            () => {
                return complete
            }
        )
}

const collection = [111, 222, 333, 444, 555, 666, 777, 888, 999]
const func = collection => {
    return collection
        .filter(x => x % 2 != 0)
        .map(x => {
            let action = x * 5
            console.log(`map ${x} is ${action}`)
        })
}
rxObj(collection, func).subscribe