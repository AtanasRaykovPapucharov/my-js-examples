// var, let, const

// 1. It works because of scope
var name = 'Pesho'
let family = 'Mishonov'
const age = 33
console.log('FirstName: ' + name)
console.log('FamilyName: ' + family)
console.log('Age: ' + age)

// 2. It works because of hoisting
let family = 'Mishonov'
const age = 33
console.log('FirstName: ' + name)
console.log('FamilyName: ' + family)
console.log('Age: ' + age)
var name = 'Pesho'

// 3. It does not work because ReferenceError: family is not defined
var name = 'Pesho'
const age = 33
console.log('FirstName: ' + name)
console.log('FamilyName: ' + family)
console.log('Age: ' + age)
let family = 'Mishonov'

// 4. It does not work because ReferenceError: age is not defined
var name = 'Pesho'
let family = 'Mishonov'
console.log('FirstName: ' + name)
console.log('FamilyName: ' + family)
console.log('Age: ' + age)
const age = 33