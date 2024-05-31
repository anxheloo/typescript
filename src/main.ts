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
let bands: string[] = [];
bands.push("halo");

// In this way we have more control over our datas and order of them.
let myTuple: [string, number, boolean] = ["Dave", 42, true];

// In this way we specift the types of data our array accepts.
let myTuple2: (string | number | boolean)[] = [42, "Dave", true];

// -------------------------------
// OBJECTS
// -------------------------------

let myObj: object;

// Is okej, cuz array is an object type
myObj = [];

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

// Here we create a type Object and specify its property types. By using "?", we make the property optional

type Guitarist = {
  name: string;
  active?: boolean;
  albums: (string | number)[];
};

// WE can also use interface same as type, will talk on upcomming lessons.

// interface Guitarist {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// };

let myObject: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1990, 5150, "OUCABONE"],
};

// Here we dont use the second prop of the Guitarist type.
let myObject2: Guitarist = {
  name: "Rimi",
  albums: [1290, 550, "MIR"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  console.log(`Hello ${guitarist.name}`);
};

greetGuitarist(myObject);

// ENUMS
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
