function saymyname(){
    console.log("R")
    console.log("I")
    console.log("T")
    console.log("U")
    console.log("R")
    console.log("A")
    console.log("J")

}

// saymyname  --> This is known as reference.
// saymyname() --> This is known as execution.

saymyname()
// console.log(saymyname())


// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2)
// }

// addTwoNumbers(78,67)

// Here number1 & number2 are known as parameters and the values which you pass for that parameters are known as Arguments.

function addTwoNumbers(number1 , number2){
    let result = number1 + number2;
    return result;
    console.log("Hitesh") // Here this console.log will never get executed reason being in a function after return nothing gets executed!!!!
}

const result = addTwoNumbers(67, 67)
console.log(result)