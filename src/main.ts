// TYPE ALIASES - we can define the variable types and save it in a variable to use as we are doing below.

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active?: boolean;
  albums: stringOrNumberArray;
};

// Literal types
let myName: "Dave";

let username: "Dave" | "John" | "Amy";
username = "Amy";

//  functions
const add = (a: number, b: number): number => {
  return a + b;
};

// Function that doesnt return anything
const logMsg = (message: any): void => {
  console.log(message);
};

logMsg(add(2, 3));

// We can use type with functions
type mathFunction = (a: number, b: number) => number;
const multiply: mathFunction = (a, b) => {
  return a * b;
};

logMsg(multiply(3, 3));

// Optional Parameter
const addAll = (a: number, b: number, c?: number): number => {
  if (c !== undefined) {
    return a + b + c;
  }

  return a + b;
};

console.log(addAll(3, 3, 3));
console.log(addAll(3, 3));

// Default param value
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};
logMsg(sumAll(2, 2, 2));
logMsg(sumAll(2, 2));

// Rest Parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
