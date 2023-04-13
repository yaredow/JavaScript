"use strict";
// const private = 123;
// function fruitJuice(Apple, Orange) {
//   console.log(Apple, Orange);
//   const jucie = `Juice with ${Apple} Apple and ${Orange} orange.`;
//   return jucie;
// }
// const orangeJuice = fruitJuice(0, 4);
// console.log(orangeJuice);
// const appleJuice = fruitJuice(4, 0);
// console.log(appleJuice);
// const appleOrangeJuice = fruitJuice(3, 5);
// console.log(appleOrangeJuice);

// function declaration
// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }
// const myAge1 = calcAge1(1996);

// // function expression

// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };
// const myAge2 = calcAge2(1996);
// console.log(myAge1, myAge2);
// Arrow function

// const add = (a, b) => a + b;

// const addition = add(3, 4);
// console.log(addition);
const fruitPieces = function (fruit) {
  return fruit * 4;
};

const fruitprocessor = function (apples, oranges) {
  const applePieces = fruitPieces(apples);
  const orangePieces = fruitPieces(oranges);
  const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
};
console.log(fruitprocessor(3, 2));
const color = ["red", "blue", "green", "yellow"];
const myFavColor = color[color.length - 1];
console.log(` my favorite color is ${myFavColor}`);
