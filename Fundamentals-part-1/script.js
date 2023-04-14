// // console.log(56 + 45 + 56);
// // let firstName = "yared";
// // console.log(firstName);

// // // Excercis on Variables
// // let country = "Ethiopia",
// //   continent = "Africa",
// //   population = "120 million";
// // console.log(`${country}, ${continent}, ${population}`);

// // Excercise on Datatype
// // let javaScriptIsFun = true;
// // console.log(typeof javaScriptIsFun);
// // console.log(typeof true);
// // console.log(typeof "Yared");
// // console.log(typeof 23);

// // javaScriptIsFun = "YES";
// // console.log(typeof javaScriptIsFun);

// // year = 1991;
// // console.log(typeof year);

// // Implicit and Explicit type coercsion
// // const now = 2023;
// // const ageYared = now - 1996;
// // const ageNahom = now - 2010;
// // console.log(`${ageYared * 2}, ${ageNahom / 10}`);
// // const firstName = "Yared";
// // const lastName = "Yilma";
// // console.log(firstName + " " + lastName);
// // let x = 10 + 5;
// // x += 10;
// // x *= 10;
// // x++;
// // x--;
// // console.log(x);
// // var result = 5 + 4 * 3 > 10 - 2;
// // console.log(result);
// // coding exercise 1

// // strings
// // const firstName = "Yared";
// // const job = "engineer";
// // const birthYear = 1996;
// // const yearNow = "2023";

// // // const yared =
// // //   "I'm" +
// // //   " " +
// // //   firstName +
// // //   ", a" +
// // //   " " +
// // //   (yearNow - birthYear) +
// // //   " " +
// // //   "years old" +
// // //   " " +
// // //   job +
// // //   ".";
// // // console.log(yared);
// // const newYared = `I'm ${firstName}, a ${yearNow - birthYear} years old ${job}.`;
// // console.log(`christopher nolan is
// // the greates directior of all time
// // I swear to god yo`);
// // coditon and decision making in JavaScript
// // const age = 19;
// // const isOldEnough = age >= 20;
// // if (isOldEnough) {
// //   console.log("you are allowed");
// // } else {
// //   yearsLeft = 20 - age;
// //   console.log(`you are not allowed. Please wait another ${yearsLeft} years.`);
// // Exercise #3

// // let markHeight = 1.85,
// //   markWeight = 78;
// // let jhonHeight = 1.95,
// //   johnWeight = 92;
// // MarkBMI = markWeight / markHeight ** 2;
// // johnBMI = johnWeight / jhonHeight ** 2;
// // console.log(MarkBMI);
// // console.log(johnBMI);
// // markHigherBMI = MarkBMI > johnBMI;

// // if (markHigherBMI) {
// //   console.log(
// //     `Mark's BMI, ${MarkBMI}, is greater than John's BMI, ${johnBMI}.`
// //   );
// // } else {
// //   console.log(`Mark's BMI, ${MarkBMI}, is less than John's BMI, ${johnBMI}.`);
// // }

// // // Type coercison in JavaScript
// // const inputYear = "1991";
// // console.log(Number(inputYear) + 4);
// // // console.log(String(23));
// // const num = 123;
// // const str = "123";
// // console.log(num + str);
// // let n = "1" - 1;
// // n = n - 1;
// // console.log(n);
// // const money = 0;
// // console.log(typeof money);
// // if (money) {
// //   console.log("Spend as much as you want");
// // } else {
// //   console.log("You shouldn't spend much");
// // }

// // let height;
// // if (height) {
// //   console.log("Yay! height is defined!");
// // } else {
// //   console.log("Height is not defined");
// // }

// // const favMovie = prompt("Bro, what is your favorite movie?");

// // if (favMovie === "TopGun") {
// //   console.log("bro, you have a good movie test");
// // } else {
// //   console.log("bro, you a dumb bitch");
// // }

// // dolphinAvg = (96 + 108 + 89) / 3;
// // koalasAvg = (88 + 91 + 110) / 3;
// // if (dolphinAvg > koalasAvg && dolphinAvg >= 100) {
// //   console.log(`Dolphin is the winner with avg score ${dolphinAvg}`);
// // } else if (dolphinAvg < koalasAvg && koalasAvg >= 100) {
// //   console.log(`Koala is the winner with an avarage score ${koalasAvg}`);
// // } else if ((dolphinAvg === koalasAvg && koalasAvg, dolphinAvg >= 100)) {
// //   console.log("it is a draw");
// // } else {
// //   console.log("No one win the game");
// // }

// // const day = "Friday";
// // if (day === "Monday") {
// //   console.log("Work on Uolo for 5 hours");
// // } else if (day === "Tuesday") {
// //   console.log("work on CSS for 6 hours");
// // } else if (day === "Wensday" || day === "Thursday") {
// //   console.log(
// //     "Work on Uolo for 5 hours and work on JavaScript portfolio for 3 hours"
// //   );
// // } else if (day === "Friday") {
// //   console.log("Work on Technical writing for 6 hours.");
// // } else if (day === "Saturday" || day === "Sunday") {
// //   console.log("Enjoy the weeknd :D");
// // } else console.log("wrong input");

// // switch (day) {
// //   case "Friday":
// //     console.log("Work on Uolo for 5 hours.");
// //     break;
// // const age = 23;
// // console.log(` I like to drink ${age >= 18 ? "wine" : "water"}`);

// // const bill = 200;
// // console.log(
// //   `The bill was ${bill}, the tip was ${
// //     bill >= 50 && bill <= 300
// //       ? (tip = (bill * 15) / 100)
// //       : (tip = (bill * 20) / 100)
// //   }`
// // );

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return (bill * 15) / 100;
//   } else {
//     return (bill * 20) / 100;
//   }
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(`your tips are ${tips[0]}, ${tips[1]}, ${tips[2]})}`);
// console.log(`your total are ${total[0]}, ${total[1]}, ${total[2]}`);

// const myArray = ["apple", "banana", "orange"];

// console.log(myArray[1]); // outputs "banana"

// myArray[2] = "grape";
// console.log(myArray); // outputs ["apple", "banana", "grape"]

// let emptyArray = new Array(3); // creates an array with 3 empty slots
// console.log(emptyArray); // outputs [empty x 3]

// const Movies = ["Inception", "Lord of the rings", "The batman", "Morbius"]
// Movies.push("John Wick") // adds "grape" to the end of the array
// console.log(Movies) // outputs ["Inception", "Lord of the rings", "The batman", "Morbius", "John Wick"]

// const Movies = ["Inception", "Lord of the rings", "The batman", "Morbius"];
// const lastMovie = Movies.pop(); // removes "Morbius" from the end of the array and returns it
// console.log(lastMovie); // Output: ["Inception", "Lord of the rings", "The batman"]

// const Movies = ["Inception", "Lord of the rings", "The batman", "Morbius"];
// Movies.unshift("Titanic"); // this will add the string Titanic to the begning of the Array
// console.log(Movies); // Output: ["Titanic", "Inception", "Lord of the rings", "The batman", "Morbius"]

// let emptyArray = [];
// emptyArray.unshift("hello");
// console.log(emptyArray); // outputs ["hello"]

const Movies = ["Inception", "Lord of the rings", "The batman", "Morbius"];
const superHeroMovies = Movies.slice(3, 4);
console.log(superHeroMovies);
