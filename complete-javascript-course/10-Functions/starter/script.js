'use strict';

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
