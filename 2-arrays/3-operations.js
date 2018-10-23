// map, filter, reduce, sort, find, fill, ..., join

let numbers = [1, 2, 55, 33, 7, 9, 22, 11, 3, 45, 33, 22, 55, 33]


// map
numbers.map(n => console.log(n * 3))


// filter
let filteredNumbers = numbers.filter(n => n > 32)
console.log(filteredNumbers) // [ 55, 33, 45, 33, 55, 33 ]

// reduce
let sum = numbers.reduce((a, n) => a + n)
console.log(sum) // 331 -> sum of [1, 2, 55, 33, 7, 9, 22, 11, 3, 45, 33, 22, 55, 33]

numbers = [1, 2, 55, 33, 7, 9, 22, 158, 11, 3, 45, 33, 22, 55, 33]
let max = numbers.reduce((a, n) => a > n ? a : n)
console.log(max) // 158

numbers = [1, 2, 55, 33, 7, 9, 22, 158, 11, 3, 45, 33, 22, 55, 33]
let min = numbers.reduce((a, n) => a < n ? a : n)
console.log(min) // 1

// sort
console.log(numbers.sort()) // [ 1, 11, 158, 2, 22, 22, 3, 33, 33, 33, 45, 55, 55, 7, 9 ]

console.log(numbers.sort((a, b) => a - b)) // [ 1, 2, 3, 7, 9, 11, 22, 22, 33, 33, 33, 45, 55, 55, 158 ]


numbers = [4, 6, 56, 2, 77]

// find
let val = numbers.find(n => n > 45)
console.log(val) // 56

// fill

numbers.fill('OP')
console.log(numbers) // [ 'OP', 'OP', 'OP', 'OP', 'OP' ]


// ...
let langs = ['JS', 'Go', 'Python']

langs = ['Lua', ...langs]

console.log(langs) // ['Lua', JS', 'Go', 'Python']

langs = [...langs, 'C']

console.log(langs) // ['Lua', JS', 'Go', 'Python', 'C']

// join
let elements = ['banana', 'kiwi', 'lemon']

console.log(elements.join()) // banana,kiwi,lemon

console.log(elements.join('')) // bananakiwilemon

console.log(elements.join('-')) // banana-kiwi-lemon
