// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'

const percentageOfWorld3 = population =>
  `${((population / 7900) * 100).toFixed(1)}%`;

let ChinaPopulation = percentageOfWorld3(1441);
let ItalyPopulation = percentageOfWorld3(86);
let GermanyPopulation = percentageOfWorld3(66);
console.log('China ' + ChinaPopulation);
console.log('Italy ' + ItalyPopulation);
console.log('Germany ' + GermanyPopulation);
