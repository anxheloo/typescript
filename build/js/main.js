"use strict";
// TYPE ALIASES - we can define the variable types and save it in a variable to use as we are doing below.
// Literal types
let myName;
let username;
username = "Amy";
//  functions
const add = (a, b) => {
    return a + b;
};
// Function that doesnt return anything
const logMsg = (message) => {
    console.log(message);
};
logMsg(add(2, 3));
const multiply = (a, b) => {
    return a * b;
};
logMsg(multiply(3, 3));
// Optional Parameter
const addAll = (a, b, c) => {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
};
console.log(addAll(3, 3, 3));
console.log(addAll(3, 3));
// Default param value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(2, 2, 2));
logMsg(sumAll(2, 2));
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
