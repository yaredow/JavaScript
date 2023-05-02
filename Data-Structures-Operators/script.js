// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   nameOfRest: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
//     return console.log(
//       `Delivered on ${time}, the food was ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]}. the food delivered to a place ${address}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`prepare your pasta with ${ing1}, ${ing2}, and ${ing3}`);
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const [i, el] of menu.entries()) {
//   // console.log(`${i + 1}: ${el}`);
// }

// const users = [{ name: 'Yared', email: 'yaredylma11@gmail.com' }];
// // console.log(users[0]?.name ?? 'The arry is empty');
// // console.log(users[1]?.name ?? 'The arry is empty');

// const properties = Object.keys(restaurant.openingHours);
// const value = Object.values(restaurant.openingHours);
// const entries = Object.entries(restaurant.openingHours);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we are open at ${open} close at ${close}`);
// }
// // const [Enjera, Tibs, ...otherFood] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];
// // console.log(Enjera, Tibs, otherFood);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// };

// const add1 = add(1, 2, 3);
// const add2 = add(4, 5, 6);
// const add3 = add(7, 8, 9);
// // console.log(add1, add2, add3);

// let guests = restaurant.mainMenu && 10;
// // console.log(guests);

// // console.log(0 && 'Yared' && '' && 'fat');
// // practical example

// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('Mushrom', 'Spinach');
// // }

// // restaurant.orderPizza && restaurant.orderPizza('Mushrom', 'Spinach');

// // const correctGuess = restaurant.guessNumber ?? 10;
// // const menu = restaurant.mainMenu ?? 10;
// // console.log(correctGuess);
// // console.log(menu);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rosi',
// };

// rest1.owner &&= '<Annonymous>';
// rest2.owner &&= '<Annonymous>';

// console.log(rest1);
// console.log(rest2);

// Footabll betting app

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// task 1: create a one player array for each team

const [players1, players2] = game.players;
// task 2
const [gk, ...fieldplayers] = players1;
// task 3: create an array called allPlayers that containt all the players
const allPlayers = [...players1, ...players2];
// task 4: create an array called players1Final

const players1Final = [...players1, 'Thiago', 'Coutihnio', 'Perisic'];

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
