const Observer = require('./Observer')
module.exports = class Observable {
  constructor(subscribe) {
    this._subscribe = subscribe
  }

  subscribe(obj) {
    const observer = new Observer(obj)

    observer._unsubscribe = this._subscribe(observer)

    return {
      unsubscribe() {
        observer.unsubscribe()
      }
    }
  }
}
