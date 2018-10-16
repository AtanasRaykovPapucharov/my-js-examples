module.exports = class Observer {
    constructor(eventHandlers) {
      this._handleEvent = eventHandlers
      this._isSubscribed = true
    }
    
    next(value) {
      if (this._handleEvent.next && this._isSubscribed) {
        this._handleEvent.next(value)
      }
    }
    
    error(error) {
      if (this._isSubscribed) {
        if (this._handleEvent.error) {
          this._handleEvent.error(error)
        }
          
        this.unsubscribe()
      }
    }
    
    complete() {
      if (this._isSubscribed) {
        if (this._handleEvent.complete) {
          this._handleEvent.complete()
        }
          
        this.unsubscribe()
      }
    }
    
    unsubscribe() {
      this._isSubscribed = false
    }
  }