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
// const fruitPieces = function (fruit) {
//   return fruit * 4;
// };

// const fruitprocessor = function (apples, oranges) {
//   const applePieces = fruitPieces(apples);
//   const orangePieces = fruitPieces(oranges);
//   const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// };
// console.log(fruitprocessor(3, 2));
// const color = ["red", "blue", "green", "yellow"];
// const myFavColor = color[color.length - 1];
// console.log(` my favorite color is ${myFavColor}`);

// const bill = 250;
// console.log(
//   ` bill is ${bill} and the tip is ${
//     bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100
//   }`
// );

// Objects

const Yared = {
  firstName: "Yared",
  lastName: "Yilma",
  age: 2023 - 1996,
  job: "Software development",
  friends: ["Yonas", "Nahom", "Tom"],
};

// console.log(Yared["firstName"]);

// const nameKey = "Name";
// console.log(Yared["first" + nameKey]);
// console.log(Yared["last" + nameKey]);
// const interestedIn = prompt(
//   "what do you want to know about Yared? choose between firstName, lastName, age, job, or friends?"
// );

// if (Yared[interestedIn]) {
//   console.log(Yared[interestedIn]);
// } else {
//   console.log("Wrong choice.");
// }

Yared.location = "Ethiopia";
Yared["Twitter"] = "@yaredow";

console.log(
  `${Yared.firstName} has ${Yared.friends.length} friends, and his best friend is ${Yared.friends[1]}`
);
