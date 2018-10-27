if (window.Worker) {
    const worker = new Worker('worker.js')

    const message = {
        addThis: {
            num1: 5,
            num2: 7
        }
    }

    worker.postMessage(message) // Send data to our worker

    worker.onmessage = e => {
        console.dir(e.data.result)
        document.getElementById('result').innerHTML = e.data.result

        worker.terminate()
    }

    worker.addEventListener('message', e => {
        console.log('Worker said: ', e.data) // Here it sends the data
    }, false)

    worker.postMessage('Hello From EventHandler') // It does not show because of worker.terminate() method 
}