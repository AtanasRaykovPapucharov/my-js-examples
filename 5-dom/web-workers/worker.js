this.onmessage = e => {
    if (e.data.addThis) {
        this.postMessage({
            result: e.data.addThis.num1 + e.data.addThis.num2
        })
    }
}

self.addEventListener('message', e => {
    self.postMessage(e.data.addThis.num1 + e.data.addThis.num2)
}, false)