const array = [1, 2, 3, 4, 5]

const observable = new Observable(observer => {
    observer.next(array)
    observer.complete()
})

const subscribeHandler = {
    next: (value) => {
        console.log(value)
    },
    error: (err) => {
        console.log(err)
    },
    complete: () => {
        console.log('complete')
    }
}

const observer = new Observer(subscribeHandler)

observable.subscribe(observer)
observable.subscribe(observer)
observable.subscribe(observer)

function Observer(handler) {
    let _isSubscribe = true
    return {
        next: (value) => {
            if (handler.next && _isSubscribe) {
                handler.next(value)
            }
        },
        error: (err) => {
            if (_isSubscribe) {
                if (handler.error) {
                    handler.error(err)
                }
                unsubscribe()
            }
        },
        complete: () => {
            if (this._isSubscribe) {
                if (handler.complete) {
                    this.handler.complete()
                }
                unsubscribe()
            }
        },
        unsubscribe: () => {
            _isSubscribed = false
        }
    }
}

function Observable(subscribe) {
    return {
        subscribe: (obj) => {
            const observer = new Observer(obj)
            observer.unsubscribe = subscribe(observer)
            return {
                unsubscribe: () => {
                    observer.unsubscribe()
                }
            }
        }
    }
}