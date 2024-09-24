'use strict';

// Random Number
console.log('Random Number between 0 and 1: ' + Math.random()); // 0.052660706019591164

// Random Number from 1.000000000000000 to 20.999999999999999 (15 decimals)
console.log(
  'Random Number between 1.00... and 20.99.. : ' + Math.random() * 20 + 1,
); // 11.683101863702449

// Random Number - Trunc Cuts all the decimals
console.log('Trunc: ' + Math.trunc(Math.random() * 20 + 1)); // Random Number from 1 to 20

// Random Number - Floor Aproximates the Number DOWN
console.log('Floor: ' + Math.floor(Math.random() * 20 + 1)); // 15.99 BECOMES 15; Also for negative numbers: -1.01 BECOMES -2

// Random Number - Ceil Aproximates the Number UP
console.log('Ceil: ' + Math.ceil(Math.random() * 20 + 1)); // 15.01 BECOMES 16; Also for negative numbers: -1.99 BECOMES -1
