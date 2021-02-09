function objectsAreEqual(object1, object2) {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)
    if (keys1.length !== keys2.length) {
        return false
    }
    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false
        }
    }
    return true
}
const person = {
    firstName: 'john',
    lastName: 'smith',
    age: 42
}
// using object destructuring below
// set these variables to be the following

const {firstName} = person
const {lastName} = person
const {age} = person

console.assert(firstName === 'john')
console.assert(lastName === 'smith')
console.assert(age === 42)

const arr = [3434,34343,112]
// using array destructuring below
// set these variables to be the following

const [one, two, three] = arr

console.assert(one === 3434)
console.assert(two === 34343)
console.assert(three === 112)

// using the spread operator
// make a copy of the object above (person)
// also add hairColor blue

const copyWithHair = {...person, hairColor: 'blue'}

console.assert(
    objectsAreEqual(
        copyWithHair, 
        {
            firstName: 'john',
            lastName: 'smith',
            age: 42,
            hairColor: 'blue'
        }
    )
)
// factorial
// make a function factorial
// that takes a number and returns the factorial of it
// IE: 5 factorial is 5 * 4 * 3 * 2 * 1
// 3 factorial: 3 * 2 * 1
// 0 factorial is 1
// etc...
function factorial(number) {
    if (number == 0) 
        return 1
    else {
        return (number * factorial(number - 1))
    }
}
console.assert(factorial(5) === 120)
console.assert(factorial(4) === 24)
console.assert(factorial(3) === 6)
// make a function grabKey
// that takes an object and a string and grabs the key of the object

function grabKey(obj, key) {
    return Object.keys(obj).find(key => obj[key] === value)
}

console.assert(minutesToSeconds(3) === 180)
console.assert(minutesToSeconds(2) === 120)

// collect letters
// make a function that makes an object of letters and their count in the string...

function collectLetters(str) {
    
}

const letterMap = collectLetters('aaba')
console.assert(objectsAreEqual(letterMap, {a: 3, b: 1}))