// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(null <= 0);
// console.log(null < 0);

// The reason is that an equality check == and comparisons > < >= <= work differently. 
// Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (4) null > 0 is false.  

//  make sure that both the elements are of the same data type before the comparision is done.

// Strict check (===) this check the data type as well as the value. Proper checking is done.

console.log("2" === 2);

console.log("2" == 2);

// if you will see the output of the above two lines, you will see that the first line will return false and the second line will return true. 

// Now the important question is why the first line is returning false and the second line is returning true.

// The reason is that the first line is using the strict check (===) which checks the data type as well as the value.

// The second line is using the normal check (==) which only checks the value and not the data type.

// So, the first line is returning false because the data type of the first element is string and the data type of the second element is number.
