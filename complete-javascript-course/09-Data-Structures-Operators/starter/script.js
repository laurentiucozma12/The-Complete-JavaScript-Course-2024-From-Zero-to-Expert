'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
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
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// 1. You can write it like this
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// 2. Or better using destructuring like this
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// const rest1 = { name: 'Capri', numGuests: 0 };
// const rest2 = { name: 'La Piazza', owner: 'Giovanni Rossi' };

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner ??= '<ANONYMOUS>'; // This is Falsy, since there is no owner, nothing happens
// rest2.owner ??= '<ANONYMOUS>'; // This is Truthy, this is why Giovanni was replaced by <ANONYMOUS>

// console.log(rest1); // {name: 'Capri', numGuests: 0, owner: undefined}
// console.log(rest2); // {name: 'La Piazza', owner: '<ANONYMOUS>',  numGuests: 10}

// const rest1 = { name: 'Capri', numGuests: 20 };
// const rest2 = { name: 'La Piazza', owner: 'Giovanni Rossi' };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10; // 10
// // rest2.numGuests = rest2.numGuests || 10; // 10

// rest1.numGuests ||= 10; // 10
// rest2.numGuests ||= 10; // 10

// console.log(rest1);
// console.log(rest2);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// const ingredients = [];

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(b);
// console.log(others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// functions
// const add = function (...num) {
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) sum += num[i];

//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);

/*
// old
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
console.log(a, b); // 111 999
console.log(obj.a, obj.b); // 23 7

({ a, b } = obj);
console.log(a, b); // 23 7

// Nested Objects
// const { fri } = openingHours;
// console.log(fri);
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23
*/
