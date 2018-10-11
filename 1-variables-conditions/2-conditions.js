let a = 11
let b = 15

function bigger(a, b) {
    let isBigger = a > b
    if (isBigger) {
        console.log('"a" is Bigger')
    } else {
        console.log('"b" is Bigger')
    }
}

bigger(a, b)

function getGender(name) {
    switch (name) {
        case 'Maria':
            console.log('We have a female dude.')
            break;
        case 'Ivan':
            console.log('We have a male dude.')
            break;
        default:
        console.log('We do not know.')
            break;
    }
}

getGender('Maria')
getGender('Ivan')
getGender('Mario')
