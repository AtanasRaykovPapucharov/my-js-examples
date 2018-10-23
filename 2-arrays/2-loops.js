// for, while, forEach

let numbers = [1, 2, 3, 4, 5, 6, 7]

for (let i = 0; i < numbers.length; i += 1) {
    console.log('index: ' + i)
    console.log('value: ' + numbers[i])
}

let n = 0

while (true) {
    if (n > 5) {
        break
    }
    n++
    console.log(n)
}

n = 0

while (n <= 5) {
    n++
    console.log(n)
}

numbers.forEach(n => {
    console.log(`N: ${n}`)
})
