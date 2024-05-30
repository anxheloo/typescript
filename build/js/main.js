"use strict";
// -------------------------------
// WORKING WITH ARRAYS IN TS
// -------------------------------
let stringArr = ["one", "hey", "Anxhelo"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1985, true];
// The first array only accepts strings
stringArr[0] = "John";
stringArr.push("hey");
// The second array accepts strings or numbers
guitars[0] = 1984;
guitars.unshift("Jim");
// The third array accepts strings, numbers and booleans
mixedData = guitars;
// Any time of data can go into this array cuz we havent specify anything
let test = [];
// This is specified to accepts strings
let bands = [];
bands.push("halo");
// In this way we have more control over our datas and order of them.
let myTuple = ["Dave", 42, true];
// In this way we specift the types of data our array accepts.
let myTuple2 = [42, "Dave", true];
// -------------------------------
// OBJECTS
// -------------------------------
let myObj;
// Is okej, cuz array is an object type
myObj = [];
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
let myObject = {
    name: "Eddie",
    active: false,
    albums: [1990, 5150, "OUCABONE"],
};
// Here we dont use the second prop of the Guitarist type.
let myObject2 = {
    name: "Rimi",
    albums: [1290, 550, "MIR"],
};
const greetGuitarist = (guitarist) => {
    console.log(`Hello ${guitarist.name}`);
};
greetGuitarist(myObject);
// ENUMS
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
