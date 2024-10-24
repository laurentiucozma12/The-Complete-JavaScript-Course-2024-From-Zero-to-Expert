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

// console.log('a+very+nice+string'.split('+')); // ['a', 'very', 'nice', 'string']
// console.log('Jonas Schmedtmann'.split(' ')); // ['Jonas', 'Schmedtmann']

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
// console.log(firstName, lastName); // Jonas Schmedtmann

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName); // Mr. Jonas SCHMEDTMANN

// const capitalizeName = function name(name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }

//   console.log(namesUpper.join(' '));
// };
// capitalizeName('jessica ann smith davis'); // Jessica Ann Smith Davis
// capitalizeName('jonas john'); // Jonas John

// // Padding
// const message = 'Go to gate 23!';
// // The total length is 20, padStart adds '+' in front of the string, until string length is 20
// console.log(message.padStart(20, '+')); // ++++++Go to gate 23!
// console.log('Jonas'.padStart(20, '+')); // +++++++++++++++Jonas

// // The total length is 30, padStart adds '+' in front of the string, until string length is 20,
// // then, padEnd adds '+' at the end of the string, until string lenght is 30
// console.log(message.padStart(20, '+').padEnd(30, '+')); // ++++++Go to gate 23!++++++++++
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+')); // +++++++++++++++Jonas++++++++++

// const maskCreditCard = function (number) {
//   // const str = String(number);
//   const str = number + ''; // When of the operands is a string, the result becomes a string
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard(345236343527554)); // ***********7554
// console.log(maskCreditCard('3452578934578934583495')); // ******************3495

// // Repeat
// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5));
// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// };

// planesInLine(5); // There are 5 planes in line ✈✈✈✈✈
// planesInLine(3); // There are 3 planes in line ✈✈✈
// planesInLine(12); // There are 12 planes in line ✈✈✈✈✈✈✈✈✈✈✈✈

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase()); // tap air portugal
// console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// //// Ex. 1 Fix capitalization in name
// const passenger = 'jOnAs';
// const passengerLower = passenger.toLowerCase(); // jonas
// const firstLetter = passengerLower[0].toLocaleUpperCase(); // J
// const correctName = firstLetter + passengerLower.slice(1); // J + onas
// console.log(correctName); // Jonas

// //// Ex. 2 Comparing email
// const email = 'hello@jonas.io';
// const loginEmail = '    Hello@Jonas.Io   \n';
// // Solution 1
// // let correctEmail = loginEmail.toLowerCase();
// // console.log(correctEmail); // '    hello@jonas.io   \n'
// // correctEmail = correctEmail.trim();
// // console.log(correctEmail); // hello@jonas.io

// // Solution 2
// const correctEmail = loginEmail.toLowerCase().trim();
// console.log(correctEmail); // hello@jonas.io

// //// Ex. 3 Replacing
// const priceGB = '299,99£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS); // 299.99$

// const announcements =
//   'All passengers come to barding door 23. Boarding door 23!';

// // Solution 1 - Regular expression / /, and the g means global
// // console.log(announcements.replace(/door/g, 'gate')); // All passengers come to barding gate 23. Boarding gate 23!

// // Solution 2
// console.log(announcements.replaceAll('door', 'gate')); // All passengers come to barding gate 23. Boarding gate 23!

// //// Ex. 4 Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320')); // true
// console.log(plane.includes('Boeing')); // false
// console.log(plane.startsWith('Bir')); // false
// console.log(plane.startsWith('A')); // true
// console.log(plane.startsWith('Air')); // true

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family'); // Part of the NEW Airbus family
// }

// //// Ex. 5
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife'); // You are not allowed on board
// checkBaggage('Socks and camera'); // Welcome aboard!
// checkBaggage('Got some snacks and a gun for protection'); // You are not allowed on board

// const plane = 'A320';
// console.log(plane[0]); // A
// console.log(plane[1]); // 3
// console.log(plane[2]); // 2
// console.log(plane[3]); // 0
// console.log('B737'[0]); // B

// console.log(airline.length); // 16
// console.log('B737'.length); // 4

// console.log(airline.indexOf('r')); // 6
// console.log(airline.lastIndexOf('r')); // 10
// console.log(airline.lastIndexOf('Portugal')); // 8

// console.log(airline.slice(4)); // Air Portugal
// console.log(airline.slice(4, 7)); // Air

// console.log(airline.slice(0, airline.indexOf(' '))); // TAP
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

// console.log(airline.slice(-2)); // al
// console.log(airline.slice(1, -1)); // AP Air Portuga

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   //// My solution
//   // if (seat.lastIndexOf('B') === -1 && seat.lastIndexOf('E') === -1) {
//   //   console.log(`Seat ${seat} is NOT a middle seat`);
//   // } else {
//   //   console.log(`Seat ${seat} is a middle seat`);
//   // }
//   //// His solution
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat');
//   } else {
//     console.log('You got lucky');
//   }
// };
// checkMiddleSeat('11B'); // Seat 11B is a middle seat
// checkMiddleSeat('23C'); // Seat 23C is NOT a middle seat
// checkMiddleSeat('3E'); // Seat 3E is a middle seat

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// Looping Objects: Object Keys, Values, and Entries

// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // [key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// Optional Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// // const users = [];

// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// // 1. You can write it like this
// // for (const item of menu.entries()) {
// //   console.log(`${item[0] + 1}: ${item[1]}`);
// // }

// // 2. Or better using destructuring like this
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

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
