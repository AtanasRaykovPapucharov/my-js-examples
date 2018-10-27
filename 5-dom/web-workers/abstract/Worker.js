class Worker {
    constructor(filePath) {
        this._filePath = filePath
        this._onerror = {}
        this._onmessage = {}
    }

    get onerror() {
        return this._onerror
    }

    set onerror(val) {
        this._onerror = val
        return this
    }

    get onmessage() {
        return this._onmessage
    }

    set onmessage(val) {
        this._onmessage = val
        return this
    }

    addEventListener() {

    }

    dispatchEvent(event) {

    }

    postMessage(msg) {

    }

    removeEventListener() {

    }

    terminate() {

    }
}