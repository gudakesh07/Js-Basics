// Dates

let myDate = new Date() // 2025-02-05T14:41:23.826Z
console.log(myDate.toString()); // Wed Feb 05 2025 14:41:55 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Wed Feb 05 2025
console.log(myDate.toLocaleString()); // 2/5/2025, 2:44:40 PM
console.log(myDate.toLocaleDateString())  // 2/5/2025
console.log(myDate.toLocaleTimeString()) // 2:45:15 PM
console.log(typeof(myDate)) // Object 


let myCreateDate = new Date(2023,0,23)

console.log(myCreateDate) // 2023-01-23T00:00:00.000Z 

// since the above output is hard to read we will use the .toDateString()

console.log(myCreateDate.toDateString()) // Mon Jan 23 2023

// So, Months in java script starts from 0 not 1. So to repre.. represent january we will use 0 and for feb we will use 1 and so on..

// what if i write 12 or even 13 for that sake on months place? it will automatically adjust the year and month and will give us the correct date.

// ot will automatically increase the year as 2023,0,23 gave us 23 jan 2023. On the other hand 2023,12,23 will give us 23 Jan 2024.


let nika = new Date(2023, 0 ,23 , 4,56)

console.log(nika.toLocaleString()) // 1/23/2023, 4:56:00 AM

// we can also input date in multiple ways like in the dd mm yyyy format or in yyyy mm dd format.

let zoro = new Date("2023-02-23")

let sanji = new Date("02-23-2023")

console.log(zoro.toDateString())
console.log(sanji.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp) // 1644073120000

// Here this gigantic number is the number of milliseconds that have passed since 1st jan 1970. This is called the epoch time.

// If we want ki aaj aabhi kitti time ho gyi hai toh we can use this epoch time and convert it into the date and time. How?

console.log(sanji.getTime())
console.log(Date.now())