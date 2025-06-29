// array
const myArr = [0,1,2,3,4]

const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[1])

console.log(myArr2.length) // gives the length of the array

// array methods

console.log(myArr)

myArr.push(5)
console.log(myArr)

myArr.push(6) // adds the element at the last place
console.log(myArr)

myArr.pop() // deletes the last element
console.log(myArr)


myArr.unshift(9) // adds the element at the 1st place
console.log(myArr)

myArr.shift() // deletes the 1st element from the array
console.log(myArr)

// questionare type methods

console.log(myArr.includes(5)) // gives you answer in true / false
console.log(myArr.includes(9))


console.log(myArr.indexOf(4))
console.log(myArr.indexOf(9)) // if the element is not there then this method returns -1

const newArr = myArr.join()

console.log(newArr)
console.log(typeof myArr) // object
console.log(typeof newArr) // string

// slice, splice

console.log("A", myArr) //A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)

console.log(myn1) // [1 , 2]

console.log("B", myArr) // B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)

console.log("C" , myArr) // [ 0, 4, 5 ]

console.log(myn2) // [1 , 2 , 3]

// slice doesn't change the original array on the other hand splice changes the original array it's like the splice method creates a new array all together.
