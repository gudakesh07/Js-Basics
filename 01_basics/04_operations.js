let value = 3;
let negValue = -value;

console.log(negValue);

console.log(2 + 2);// Addition
console.log(2 - 2); // Subtraction
console.log(2 / 2); // Division
console.log(2 * 2); // Multiplication
console.log(2 ** 2); // Exponentiation
console.log(2 % 2); // Remainder (Modulus)

let str1 = "hello";

let str2 = " Gudakesh";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log(1 - "2"); // JS will convert the string to a number and then perform the operation. 

// Therefore the answer will be -1.

console.log("1" + 2 + 3); // 123
console.log(1 + 2 + "3"); // 33

// Aage jo v rahega us hisab se operation perform hoga.

// If string is at the beginning, then the whole code will be treated as if it was a string.

// If string is at the end, then the whole code will be treated as if it was a number.

console.log("1" * 2) // 2
console.log("1" * "2") // 2
console.log("1" / "2") // 0.5
console.log("1"- "2");

// If we try to perform any operation other than addition, JS will convert the string to a number and then perform the operation.

console.log(3 +4 * 5 / 6); // Don't write code like this. Always use brackets to make the code more readable.

console.log(3 + (4 * 5) / 6); // Use brackets to make the code more readable. The braces won't deplete if you use them.

console.log(+true) // => the + operator initiates the conversion of the boolean to a number. true = 1.

console.log(-true) // => the - operator initiates the conversion of the boolean to a number.The - operator will make it -1.

console.log(-false) // => the - operator initiates the conversion of the boolean to a number. false = -0.

console.log(+false) // => the + operator initiates the conversion of the boolean to a number. false = 0.

console.log(+"") // the + operator initiates the conversion of the string to a number. "" = 0.

let num1, num2, num3;

num1 = num2 =num3 = 2+2

console.log(num1, num2, num3);

let gameCounter = 100;
gameCounter++;

console.log(gameCounter);

let playerDied = 100;
playerDied--;
console.log(playerDied);

// precedence of operators

let lives = 3
++lives;
console.log(lives)

let heart = 2;
--heart;
console.log(heart)
