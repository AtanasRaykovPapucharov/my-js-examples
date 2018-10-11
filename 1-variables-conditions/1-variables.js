// 1. types - number, string, boolean, object, undefined

// 2. definition - var, let, const

// It works because of scope
var name1 = 'Pesho'
let family1 = 'Mishonov'
const age1 = 28
console.log('FirstName: ' + name1)
console.log('FamilyName: ' + family1)
console.log('Age: ' + age1)

// 3. variables hoisting

// It works because of hoisting - "var"-variables go to the top of the execution context
let isMale = true
const age2 = 28
console.log('FirstName: ' + name2)
console.log('FamilyName: ' + isMale)
console.log('Age: ' + age2)
var name2 = 'Pesho'

// It does not work because ReferenceError
var name3 = 'Pesho'
const age3 = 28
console.log('FirstName: ' + name3)
// console.log('FamilyName: ' + family3) - ReferenceError: family3 is not defined
console.log('Age: ' + age3)
let family3 = 'Mishonov'

// It does not work because ReferenceError
var name4 = 'Pesho'
let family4 = 'Mishonov'
console.log('FirstName: ' + name4)
console.log('FamilyName: ' + family4)
// console.log('Age: ' + age4) - ReferenceError: age4 is not defined
const age4 = 28


// 4. scope
// "var" - function scope
// "let", "const" - block scope
// "" - global scope (without 'use strict')

function test() {
    if (true) {
        var name = 'Pesho'
        let age = 15
    }

    console.log(name)
    // console.log(age) - ReferenceError: age is not defined
}

test()
