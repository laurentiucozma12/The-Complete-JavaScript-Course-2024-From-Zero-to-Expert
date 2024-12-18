'use strict';

/*
const bookings = [];

// ES6
const createBooking = function (
  flightNum,
  numPassengers = 1,
  // 1.
  // price = 199
  // 2.
  price = 199 * numPassengers,
) {
  // ES5 - old way
  // numPassengers = numPassengers || 1; // Add default value
  // price = price || 199; // Add default value

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// 1.
createBooking('LH123'); // {flightNum: 'LH123', numPassengers: 1, price: 199}
createBooking('LH123', 2, 800); // {flightNum: 'LH123', numPassengers: 2, price: 800}

// 2. In this example, thr price is dinamically calculated
createBooking('LH123', 2); // {flightNum: 'LH123', numPassengers: 2, price: 398}
createBooking('LH123', 5); // {flightNum: 'LH123', numPassengers: 5, price: 995}

// This only works for parameters that are defined in the list before
// This would NOT work:
// const createBooking = function (
//     flightNum,
//     price = 199 * numPassengers,
//     numPassengers = 1,
//   )

// 3. We can't specify the price as the second argument, since is on the thirs position
// const createBooking = function (
//     flightNum,
//     numPassengers = 1,
//     price = 199 * numPassengers,
//   )
createBooking('LH123', 1000); // This will be numPassenger NOT the price
// So the solution to this is to write undefined for parameters

createBooking('LH123', undefined, 1000); // {flightNum: 'LH123', numPassengers: 1, price: 1000}
// !!! Setting a parameter to undifend is the same as NOT even setting it !!!
// This is how to skip a default parameter that we want to leav at its default

*/

/*
const flight = 'LH234';
const jonas = { name: 'Jonas Schmedtmann', passport: 12345678901 };

const checkIn = function (flightNum, passenger) {
  flightNum = 'Lh999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 12345678901) {
    alert('check in');
  } else {
    alert('wrong passport');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
// Original string: JavaScript is the best!
// Transformed string: JAVASCRIPT is the best!
// Transformed by: upperFirstWord

transformer('JavaScript is the best!', oneWord);
// Original string: JavaScript is the best!
// Transformed string: javascriptisthebest!
// Transformed by: oneWord

const high5 = function () {
  console.log('hand emoji');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
