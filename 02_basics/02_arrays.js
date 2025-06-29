const marvel_heros = ["Spider Man", "Iron Man", "Thor"]

const dc_heros = ["Superman", "Batman", "Flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)

// console.log(marvel_heros[3][1])

// const all_heros = marvel_heros.concat(dc_heros)

// console.log(all_heros)

// If you are having more that 2 arrays which you want to aise concatinate then you should use..

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros)


const another_array = [1,2,3 [4,5,6], 7,[6,7[4,5]]]

// in this case it's really difficult for me to read this array so to avoid such cases we use the flat method!!!

const real_usable_array = another_array.flat(Infinity)

console.log(real_usable_array)

//  here infinity means the depth in which you want to solve the array!!
// infinity means flat all the array.


console.log(Array.isArray("Hitesh")) // The isArray() method returns true if an object is an array, otherwise false.

console.log(Array.from("Hitesh")) // this method creates an array of a given text.

const huhu = ["Zoro","nika","Apple"]
console.log(huhu.sort()) // so the sort method sorts the string of arrays in ascending order.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

console.log(Array.from({name:"Hitesh"}))