// create, length, indexOf, includes, push, pop, unshift, shift,
// reverse, lastIndexOf, concat, slice, splice

let tasks = [] // recommended
let projects = new Array()


// push
tasks.push(1)
tasks.push(3)
tasks.push(5)
tasks.push(7)

console.log(tasks) // [ 1, 3, 5, 7 ]
console.log(tasks.length) // 4
console.log(tasks.indexOf(5)) // 2
console.log(tasks.indexOf(2)) // -1
console.log(tasks.includes(1)) // true

// pop
tasks.pop()
console.log(tasks) // [ 1, 3, 5 ]

// unshift
tasks.unshift(9)
console.log(tasks) // [ 9, 1, 3, 5 ]
tasks.unshift(8)
console.log(tasks) // [ 8, 9, 1, 3, 5 ]

// shift
tasks.shift()
console.log(tasks) // [ 1, 3, 5 ]

// reverse
tasks.reverse()
console.log(tasks) // [ 5, 3, 1, 9 ]

tasks.unshift(9)
console.log(tasks) // [ 9, 5, 3, 1, 9 ]

// lastIndexOf
let ind = tasks.lastIndexOf(9)
console.log(ind) // 4


let a = [1, 2, 3]
let b = [7, 8, 9]

// concat
let c = a.concat(b)
let d = b.concat(a)
let e = b.concat(b)

console.log(c) // [ 1, 2, 3, 7, 8, 9 ]
console.log(d) // [ 7, 8, 9, 1, 2, 3 ]
console.log(e) // [ 7, 8, 9, 7, 8, 9 ]

// delete - do not use
let arr = [1, 2, 3]

delete arr[2]

console.log(arr) // [ 1, 2, <1 empty item> ]



let ids = [11, 22, 33, 44, 55]

// slice
console.log(ids.slice(3)) // [ 44, 55 ]

console.log(ids.slice(1, 3)) // [ 22, 33 ]

console.log(ids) // [11, 22, 33, 44, 55]


// splice
console.log(ids.splice(3)) // [ 44, 55 ]

console.log(ids) // [ 11, 55 ] // [ 11, 22, 33 ]

ids = [11, 22, 33, 44, 55]

console.log(ids.splice(1, 3)) // [ 22, 33, 44 ]

console.log(ids) // [ 11, 55 ]
