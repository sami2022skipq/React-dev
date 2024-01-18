const path = require("node:path")


// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))

// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))




// console.log(path.parse (__filename))

console.log(path.join("asm.js", "index.json", "main.html"))


function greet(name){
    console.log(`Hello ${name}`)

}

function greetSammi(greeFn){
    let name = "Abdul Sami"
    greeFn(name)
}

greetSammi(greet)

// a functon which accepts  a functiion as its argument or returns a function is called higher order function
// a fucntion that is paassed as an argument to any other fucntion is callled Call back functiion in java script 




// syncronous callback functions 

let numbers =[1,2,33,5,4,6,9,777,5]

let sort =numbers.sort((a,b)=>b-a)
let filter = numbers.filter(n=> n%2 === 0)
let map = numbers.map(n=> n/2).filter(n=> n<10)

console.log(sort)
console.log(filter)
console.log(map)