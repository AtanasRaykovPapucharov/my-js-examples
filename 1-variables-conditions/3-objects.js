let obj = {} // recommended
let other = new Object()

let person = obj
person.name = 'Indira'
person['age'] = 22

console.log(person) // { name: 'Indira', age: 22 }

person['name'] = 'Nick'
person.age = 23
console.log(person) // { name: 'Nick', age: 23 }

console.log(person.length) // undefined

