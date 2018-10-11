function Observable() {
    let observers = []

    return {
        registerObserver: (observer) => {
            observers.push(observer)
        },
        unregisterObserver: (observer) => {
            if (observers.indexOf(observer) !== -1) {

            }
        },
        notifyObservers: () => {
            observers.forEach(observer => {
                if (observer !== 'undefined') {

                }
            })
        }
    }
}