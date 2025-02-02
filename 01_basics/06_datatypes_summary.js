// Data in programming languages are divided on the basis of where are they stored in memory and how can we access them.

// With that in mind, we can divide data into two categories:
// 1. Primitive Data Types / Value Data Types(so basically in call by value data types we hand out the xerox of the value not the original value so even if the xerox values gets changed or destroyed it wont matter.)

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt.

const score = 100

const scoreValue = 100.3

const isLoggedin = false

const outsideTemp = null

// let useremail; // undefined

let useremail = undefined // undefined

const id = Symbol("123")

const anotherId = Symbol("123")

console.log(id == anotherId);

const bigNumber = 875234127562893475563487653457634853683674033420438968634468686458364935083465087346548356348756834n

console.log(bigNumber)


// 2. Non- Primitive Data types / Reference Data Types(call by reference is like giving someone the actual document. If they scribble on it, tear it, or add stickers, the original document changes forever.)

// 3 types: Object, Array, Function.

// Java Script is a dynamically typed language, which means that we do not need to specify the data type of the variable while declaring it. The data type of the variable is determined at runtime.


const heros = ["Shaktiman", "naagraj", "Superman"];
let myobj = {
    name: "Gudakesh",
    age: 25
}

console.log(myobj)

const myFunction = function(){
    console.log("This is a function")
}


// How to find out the data type of a variable in JavaScript?

console.log(typeof myFunction); // function object.
console.log(typeof bigNumber); // bigInt
console.log(typeof outsideTemp); // object



