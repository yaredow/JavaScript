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

// const Yared = {
//   firstName: "Yared",
//   lastName: "Yilma",
//   birthYear: 1996,
//   job: "Software developer  ",
//   friends: ["Yonas", "Nahom", "Tom"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.age} years old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
//   },
// };

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

// Yared.location = "Ethiopia";
// Yared["Twitter"] = "@yaredow";

// console.log(
//   `${Yared.firstName} has ${Yared.friends.length} friends, and his best friend is ${Yared.friends[1]}`
// );
// console.log(Yared.calcAge());

// console.log(Yared.getSummary());

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   height: 1.69,
//   weight: 78,
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   height: 1.95,
//   weight: 92,
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// const markBMI = mark.calcBMI();
// const johnBMI = john.calcBMI();
// if (markBMI > johnBMI) {
//   console.log(
//     `${mark.firstName}'s BMI (${markBMI}) is higher than ${john.firstName}'s BMI (${johnBMI}) `
//   );
// } else {
//   console.log(
//     `${john.firstName}'s BMI (${johnBMI}) is higher than ${mark.firstName}'s BMI ${markBMI} `
//   );
// }

// const yared = ["Yared", "Yilma", 2023 - 1996, ["Nati", "Nahom", "Sam"]];
// const type = [];

// for (let i = 0; i < yared.length; i++) {
//   console.log(yared[i], typeof [i]);
//   type[i] = typeof yared[i];
// }

// console.log(type);

// const years = [1991, 1993, 2001, 1996, 1965];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }
// console.log(ages);

// const yared = ["Yared", "Yilma", 2023 - 1996, ["Nati", "Nahom", "Sam"]];
// // for (let i = 0; i < yared.length; i++) {
// //   if (typeof yared[i] !== "string") continue;
// //   console.log(yared[i], typeof yared[i]);
// // }

// for (let i = yared.length - 1; i >= 0; i--) {
//   console.log(i, yared[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------ Starting excercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repitation ${rep}`);
//   }
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice != 6) {
//   console.log(`you rolled ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log("The loop is about to end...");
//   }
// }
