'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  nameOfRest: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
    return console.log(
      `Delivered on ${time}, the food was ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]}. the food delivered to a place ${address}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// the spread operator

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];

const newMenu = [...restaurant.mainMenu, 'Enjera'];
console.log(newMenu);

// restaurant.orderDelivery({
//   time: '12:30',
//   address: 'Sidst Killo',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // destructuring array
// const { nameOfRest, openingHours, categories } = restaurant;
// //destructuring a nested object
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const {
//   nameOfRest: nameOfCafe,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(nameOfCafe, hours, tags);

// //Mutating variables
// let a = 34;
// let b = 54;
// const obj = { a: 124, b: 145, c: 244 };
// ({ a, b } = obj);
// console.log(a, b);

// // const arr = [2, 3, 4];
// // const a = [0];
// // const b = [1];
// // const c = [2];

// // const [x, y, z] = arr;
// // console.log(x, y, z);

// let [main, , , secondary] = restaurant.categories;

// let temp = main;
// main = secondary;
// secondary = temp;
// // Switching variables using array deconstructions
// [main, secondary] = [secondary, main];

// const [starter, mainCourse] = restaurant.order(2, 2);

// //nested destructuring
// const nested = [2, 5, [3, 4]];

// const [i, , [j, k]] = nested;
