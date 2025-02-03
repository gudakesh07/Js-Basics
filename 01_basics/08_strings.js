const name = "Gudakesh"
const repoCount = 5

console.log(name + " " + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Gudakesh-gg-com")

console.log(gameName)

//  Now remember that in python there was this concept of indexes here it it the same.. for that just use the square brackets

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase())

// console.log(gameName.charAt(2))

//  in the code line number 14 and 19 both are same thing but line number 14 is modern and it treats the string as if it was an array and access the character at index 0. If the index is out of range it will return undefined. But in line number 19 it will return an empty string"".


console.log(gameName.indexOf("k"))

const newString = gameName.substring(0,4)

console.log(newString)

const anotherString = gameName.slice(-8 ,5)
console.log(anotherString)

const newstring1 = "     Gudakesh       "

console.log(newstring1)
console.log(newstring1.trim())

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace("%20", "-"))

console.log(url.includes("hitesh"))

console.log(url.includes("Gudakesh"));

console.log(gameName.split("-"));


const sentence = "The quick brown fox jumps over the lazy dog"

let index = 5

console.log(`An index of ${index} returns the character ${sentence[index]}`)

index = -4

console.log(`An index of ${index} returns the character ${sentence[index]}`)

