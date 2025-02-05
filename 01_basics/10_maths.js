console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.3))
// Now as we know thst if the number is above 5 is is rounded of to the next big number and if the number is less than 5 it is rounded of to the numberr it self..

// If we want to control this ki max round off kre ya for min wala round off kre to we can use ceil and floor functions.

console.log(Math.ceil(4.78))

// ceil means if the value is even slightly greater than the number than the function will round it off to the next big number.

console.log(Math.floor(4.9999))

// floor means whatever the number is it will be rounded of the the number itself.

console.log(Math.pow(2,7))

console.log(Math.sqrt(25))

console.log(Math.min(34,54,64,23))
console.log(Math.max(34, 54, 64, 23));

console.log(Math.random())

// .random() this function will give us a random number between 0 and 1.

// now if we want to get a random number between 1 to 10 we will  just multiply the whole thing by 10.  So, it will give us a random number between 0 and 10.

console.log(Math.random()*10+1);

// toh not to  get induldge in these bodmas complications we will use braces.. like this

console.log((Math.random() * 10 )+ 1);

// If we want ki wo number minumum aaye to floor se wrap kr dete hai..

console.log(Math.floor(Math.random() * 10 ) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max -  min + 1)) + min)

// last mein min isi liye add kiye hai because we want the number to be between 10 and 20. and agar humne min nahi add kiya toh wo 1 se 11 tak ka number dega.

// So here in code line 43 what we have done is we have created this formula where we can get the desired result max and min values.

// // xplanation:
// Math.random()

// This generates a random decimal (floating-point) number between 0 and 1.
// Example outputs: 0.3456, 0.9876, 0.1234, etc.
// Math.random() * 10

// Multiplies the random number by 10, so now the range becomes 0 to 9.9999.
// Example outputs: 3.456, 9.876, 1.234, etc.
// Math.random() * 10 + 1

// Adds 1 to the result, shifting the range from 1 to 10.9999.
// Example outputs: 1.456, 10.876, 2.234, etc.
// console.log(...)

// Prints the final number to the console.
// Key Takeaway:
// This code generates a random number between 1 and 11 (excluding 11).
// If you want only whole numbers, you can use Math.floor() or Math.ceil().