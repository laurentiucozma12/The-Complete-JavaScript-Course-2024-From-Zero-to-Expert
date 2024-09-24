'use strict';
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Object.assign() can help merging 2 objects, to make a simple clone, NOT a Deep Clone
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

// The clone works for simple variable
console.log('Before marriage:', jessica2); // 'Before marriage:' {firstName: 'Jessica', lastName: 'Williams' ...}
console.log('After marriage: ', jessicaCopy); // 'After marriage:' {firstName: 'Jessica', lastName: 'Davis' ...}

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

// The problem is that is NOT working with an Object inside an Object (for example an Array in an Object):
console.log('Before marriage:', jessica2); // 'Before marriage:' {firstName: 'Jessica', lastName: 'Williams', age: 27, family: Array(4)}
console.log('After marriage: ', jessicaCopy); // 'After marriage:' {firstName: 'Jessica', lastName: 'Davis', age: 27, family: Array(4)}
// It should show an Array(2) Before the marriage and an Array(4) after marriage
// The solution is to use a library like Lo-Dash. We could do it ourselves but it's too complex.
