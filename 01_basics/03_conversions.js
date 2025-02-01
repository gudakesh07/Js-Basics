let score = "Gudakesh";

console.log(typeof(score));
console.log(typeof score);

let vanlueInnumber = Number(score);

console.log(typeof(vanlueInnumber));
console.log(vanlueInnumber); // NaN => Not a Number.

// "33" => 33
// "33abc" => NaN
//"Gudakesh" => NaN
// true => 1
// false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn)

// 1 => true
// 0 => false
// "hitesh" => true
// "" => false

// JS just sees whether something "exists" or not. If it has content or a value, it's true. If it's empty or nothing, it's false.

let someNumber = 33;

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof(stringNumber));  