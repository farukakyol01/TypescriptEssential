"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result : " + num);
}
function printResult1(num) {
    console.log("Result : " + num);
    return;
}
let combineValues;
combineValues = add;
//let combineValues: Function;
//////combineValues = add;
printResult(combineValues(1, 2));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(2, 6, printResult);
addAndHandle(10, 20, (result) => {
    console.log("Result : " + result);
});
let userInput;
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);
