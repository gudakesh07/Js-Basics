const accountId = 1445577

let accountEmail = "gudakesh07@gg.com"

var accountPassword = "Nika07"

accountCity = "Jaipur"

let accountState;

// accountId = 2 // TypeError: Assignment to constant variable.

accountEmail = "gudakesh07@google.com"

accountPassword = "1234"

accountCity = "Nagpur"

console.log(accountId);

console.log(accountEmail);

console.log(accountCity);

console.log(accountPassword);

console.log(accountState);


//  Itta mehnat krne se aacha ek kam karo!!

console.table([accountId, accountEmail, accountPassword, accountCity])

//  So basically we can use the .table method to print all of the values in a table format.


// So the main difference between let and var is that var doesn't have scope in it due to which earlier if you have declared a name variable in this file and at other places too. So if you will change the value of a variable in this file then it'll automatically update all the values with the same variable name.!!! So to counter this problem developers developed a new function "let" which has good scope!! form scope we mean {} aise if else for loop wagera ka!!

//  Don't use var ever!!!

//  if you just declear a variable and there is no value assigned to it then in javascript it is simply known as "UNDEFINED".

