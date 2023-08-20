"use strict";
console.log("Your code goes here...");
console.log("It is formatted...");
console.log("Server is running...");
console.log("Server is running...");
function add(n1, n2, showResult, phrase) {
    //  if (typeof n1 !== "number" || typeof n2 !== "number") {
    //    throw Error("Incorrect input!");
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
    console.log(typeof number1);
    return result;
}
let number1;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is : ";
add(number1, number2, printResult, resultPhrase);
