// // 'use strict';

// // // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // // Data needed for first part of the section
// // const restaurant = {
// //   nameOfRest: 'Classico Italiano',
// //   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// //   order: function (starterIndex, mainIndex) {
// //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// //   },
// //   orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
// //     return console.log(
// //       `Delivered on ${time}, the food was ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]}. the food delivered to a place ${address}`
// //     );
// //   },
// //   orderPasta: function (ing1, ing2, ing3) {
// //     console.log(`prepare your pasta with ${ing1}, ${ing2}, and ${ing3}`);
// //   },

// //   openingHours: {
// //     thu: {
// //       open: 12,
// //       close: 22,
// //     },
// //     fri: {
// //       open: 11,
// //       close: 23,
// //     },
// //     sat: {
// //       open: 0, // Open 24 hours
// //       close: 24,
// //     },
// //   },
// // };

// // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // for (const [i, el] of menu.entries()) {
// //   // console.log(`${i + 1}: ${el}`);
// // }

// // const users = [{ name: 'Yared', email: 'yaredylma11@gmail.com' }];
// // // console.log(users[0]?.name ?? 'The arry is empty');
// // // console.log(users[1]?.name ?? 'The arry is empty');

// // const properties = Object.keys(restaurant.openingHours);
// // const value = Object.values(restaurant.openingHours);
// // const entries = Object.entries(restaurant.openingHours);

// // for (const [day, { open, close }] of entries) {
// //   console.log(`On ${day} we are open at ${open} close at ${close}`);
// // }
// // // const [Enjera, Tibs, ...otherFood] = [
// // //   ...restaurant.mainMenu,
// // //   ...restaurant.starterMenu,
// // // ];
// // // console.log(Enjera, Tibs, otherFood);

// // const add = function (...numbers) {
// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) {
// //     sum += numbers[i];
// //   }
// //   return sum;
// // };

// // const add1 = add(1, 2, 3);
// // const add2 = add(4, 5, 6);
// // const add3 = add(7, 8, 9);
// // // console.log(add1, add2, add3);

// // let guests = restaurant.mainMenu && 10;
// // // console.log(guests);

// // // console.log(0 && 'Yared' && '' && 'fat');
// // // practical example

// // // if (restaurant.orderPizza) {
// // //   restaurant.orderPizza('Mushrom', 'Spinach');
// // // }

// // // restaurant.orderPizza && restaurant.orderPizza('Mushrom', 'Spinach');

// // // const correctGuess = restaurant.guessNumber ?? 10;
// // // const menu = restaurant.mainMenu ?? 10;
// // // console.log(correctGuess);
// // // console.log(menu);

// // const rest1 = {
// //   name: 'Capri',
// //   numGuests: 0,
// // };
// // const rest2 = {
// //   name: 'La Piazza',
// //   owner: 'Giovanni Rosi',
// // };

// // rest1.owner &&= '<Annonymous>';
// // rest2.owner &&= '<Annonymous>';

// // console.log(rest1);
// // console.log(rest2);

// // Footabll betting app

// // const game = {
// //   team1: 'Bayern Munich',
// //   team2: 'Borrussia Dortmund',
// //   players: [
// //     [
// //       'Neuer',
// //       'Pavard',
// //       'Martinez',
// //       'Alaba',
// //       'Davies',
// //       'Kimmich',
// //       'Goretzka',
// //       'Coman',
// //       'Muller',
// //       'Gnarby',
// //       'Lewandowski',
// //     ],
// //     [
// //       'Burki',
// //       'Schulz',
// //       'Hummels',
// //       'Akanji',
// //       'Hakimi',
// //       'Weigl',
// //       'Witsel',
// //       'Hazard',
// //       'Brandt',
// //       'Sancho',
// //       'Gotze',
// //     ],
// //   ],
// //   score: '4:0',
// //   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// //   date: 'Nov 9th, 2037',
// //   odds: {
// //     team1: 1.33,
// //     x: 3.25,
// //     team2: 6.5,
// //   },
// // };

// // // task 1: create a one player array for each team

// // const [players1, players2] = game.players;
// // // task 2
// // const [gk, ...fieldplayers] = players1;
// // // task 3: create an array called allPlayers that containt all the players
// // const allPlayers = [...players1, ...players2];
// // // task 4: create an array called players1Final

// // const players1Final = [...players1, 'Thiago', 'Coutihnio', 'Perisic'];

// // // const {
// // //   odds: { team1, x: draw, team2 },
// // // } = game;
// // //task 1
// // for (const item of game.scored) {
// //   // console.log(item);
// // }
// // //task 2
// // const odds = Object.values(game.odds);
// // avarage = 0;
// // for (const odd of odds) avarage += odd;
// // avarage /= odds.length;
// // console.log(avarage);
// // // task 3

// // for (const [team, odd] of Object.entries(game.odds)) {
// //   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
// //   console.log(`odd of ${teamStr} is ${odd}`);
// // }

// // const mySet = [1, 1, 2, 4, 5, 5];
// // console.log(mySet);

// // const myNoneDuplicateSet = new Set(mySet);
// // console.log(myNoneDuplicateSet);

// // const myNoneDuplicateArray = [...myNoneDuplicateSet];
// // console.log(myNoneDuplicateArray);

// // console.log(new Set(mySet).size);

// // Maps

// // const mapeEx = new Map();
// // mapeEx.set(1, 'Chicken');
// // mapeEx.set(2, 'Beef');
// // mapeEx
// //   .set(true, 'chicken is healthy')
// //   .set(false, 'Beef is healthy')
// //   .set('chickenCal', 18)
// //   .set('BeefCal', 10);

// // const calory = 12;
// // console.log(
// //   mapeEx.get(
// //     calory > mapeEx.get('checkenCal') && calory < mapeEx.get('beefCal')
// //   )
// // );

// // const question = new Map([
// //   ['questions', 'What is the best programming language in the world?'],
// //   [1, 'C'],
// //   [2, 'Java'],
// //   [3, 'JavaScript'],
// //   ['correct', 3],
// //   [true, 'Correct 🎉'],
// //   [false, 'Try again'],
// // ]);
// // console.log(question.get('questions'));

// // const answer = Number(prompt('What is your answer?'));
// // if (question.get('correct') === answer) {
// //   console.log(question.get(true));
// // } else {
// //   console.log(question.get(false));
// // }

// // console.log(...question);
// // console.log(question.keys);
// // console.log(question.values);

// // const game = {
// //   team1: 'Bayern Munich',
// //   team2: 'Borrussia Dortmund',
// //   players: [
// //     [
// //       'Neuer',
// //       'Pavard',
// //       'Martinez',
// //       'Alaba',
// //       'Davies',
// //       'Kimmich',
// //       'Goretzka',
// //       'Coman',
// //       'Muller',
// //       'Gnarby',
// //       'Lewandowski',
// //     ],
// //     [
// //       'Burki',
// //       'Schulz',
// //       'Hummels',
// //       'Akanji',
// //       'Hakimi',
// //       'Weigl',
// //       'Witsel',
// //       'Hazard',
// //       'Brandt',
// //       'Sancho',
// //       'Gotze',
// //     ],
// //   ],
// //   score: '4:0',
// //   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// //   date: 'Nov 9th, 2037',
// //   odds: {
// //     team1: 1.33,
// //     x: 3.25,
// //     team2: 6.5,
// //   },
// // };
// // const gameEvents = new Map([
// //   [17, '⚽ GOAL'],
// //   [36, '� Substitution'],
// //   [47, '⚽ GOAL'],
// //   [61, '� Substitution'],
// //   [64, '� Yellow card'],
// //   [69, '� Red card'],
// //   [70, '� Substitution'],
// //   [72, '� Substitution'],
// //   [76, '⚽ GOAL'],
// //   [80, '⚽ GOAL'],
// //   [92, '� Yellow card'],
// // ]);

// // // task 1
// // const events = [...new Set([...gameEvents.values()])];
// // // task 2
// // gameEvents.delete(64);
// // //task 3
// // console.log(`An event happened, on
// // average, every ${90 / gameEvents.size} minutes`);
// // // task 4

// // const airline = 'Ethiopian Airline';
// // const Plane = 'A3020';

// // console.log(airline.slice(0, airline.indexOf(' ')));
// // console.log(airline.slice(airline.lastIndexOf(' ')));

// // const checkMiddleSeat = function (seat) {
// //   if (seat.slice(-1) === 'E' || seat.slice(-1) === 'B') {
// //     console.log('Your seat is in the middle');
// //   } else {
// //     console.log('your seat is not in the middle');
// //   }
// // };
// // checkMiddleSeat('11F');

// // const passanger = 'YaREd';
// // const passangerLower = passanger.toLowerCase();
// // const passangerCorrect =
// //   passangerLower[0].toUpperCase() + passangerLower.slice(1);
// // console.log(passangerCorrect);

// // const announcement =
// //   'All passamgers come to the boarding door 23. the boarding door';
// // const announcementRep = announcement.replaceAll('door', 'gate');
// // console.log(announcementRep);

// // const [firstName, lastName] = 'Yared Yilma'.split(' ');
// // const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
// // console.log(newName);

// // A function that can capitalize users input.

// // const nameCapitalizer = function (name) {
// //   const names = name.split(' ');
// //   const namesUpper = [];
// //   for (const n of names) {
// //     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
// //   }
// //   console.log(namesUpper.join(' '));
// // };

// // nameCapitalizer('yared yilma tegegn');

// // const message = 'Go to the first gate';
// // const padMessage = message.padStart(30, '+').padEnd(30, '+');
// // console.log(padMessage);

// // const userName = prompt('What is your name?');
// // const [firstName, lastName] = userName.split(' ');

// // const passanger = 'jessica ann smith';
// // const names = passanger.split(' ');
// // const nameCapitalizer = function (name) {
// //   const names = name.split(' ');
// //   const upperName = [];
// //   for (const n of names) {
// //     upperName.push(n[0].replace(n[0], n[0].toUpperCase()) + n.slice(1));
// //   }
// //   console.log(upperName.join(' '));
// // };
// // nameCapitalizer(passanger);

// // const maskCreditCard = function (number) {
// //   const str = number + '';
// //   const last = str.slice(-4);
// //   return last.padStart(str.length, '*');
// // };
// // const creditNumber = prompt('Enter your card detail');
// // console.log(maskCreditCard(creditNumber));

// // string method questions
// // task 1: chage a given name into camel case name

// // document.body.append(document.createElement('textarea'));
// // document.body.append(document.createElement('button'));

// // const text = document.querySelector('textarea').value;

// // document.querySelector('button').addEventListener('click', function () {
// //   const text = document.querySelector('textarea').value;
// //   const words = text.split('\n');
// //   for (const [i, w] of words.entries()) {
// //     const [first, second] = w.toLowerCase().trim().split('_');
// //     const output = first + second.replace(second[0], second[0].toUpperCase());
// //     console.log(`${output.padEnd(20)}${'✅'.repeat(i)}`);
// //   }
// // });

// const flights =
//   // '_Delayed_Departure;fao93766109;tx2133758440;11:25+_Arrival;bru0943384722:8093766109:11:4+_Delayed _Arrival;he17439299980;fao93766109;12:05+_Departure;fa093766109;Lis2323639855;12:30';

// for (const item of flights.split('+')) {
//   const [type, from, to, time] = item.split(';');
//   console.log(
//     `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
//       '_',
//       ' '
//     )} from ${from.slice(0, 3).toUpperCase()} to ${to
//       .slice(0, 3)
//       .toUpperCase()} (${time.replace(':', 'h')})`
//   );
// }
