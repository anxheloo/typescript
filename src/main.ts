// BASIC TYPES IN TYPESCRIPT

let myName: string = "Anxhelo";
let meaningOfLife: number;
let isLoading: boolean;
let album: string | number; //string or number

myName = "John";
meaningOfLife = 42;
isLoading = true;
album = "Noizy";

const sum = (a: number, b: number) => {
  return a + b;
};

let postId: string | number;
let isActive: number | boolean;

//TypeScript also gives us the correct type when we hover over it.
let re: RegExp = /\w+/g;
