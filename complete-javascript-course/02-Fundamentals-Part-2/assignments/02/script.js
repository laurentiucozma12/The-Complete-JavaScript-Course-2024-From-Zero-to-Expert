// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

//// Function Declarations
function percentageOfWorld1(population) {
  let percentagePopulation = ((population / 7900) * 100).toFixed(1);
  return `${percentagePopulation}%`;
}
let ChinaPopulation = percentageOfWorld1(1441);
let ItalyPopulation = percentageOfWorld1(86);
let GermanyPopulation = percentageOfWorld1(66);
console.log('China ' + ChinaPopulation);
console.log('Italy ' + ItalyPopulation);
console.log('Germany ' + GermanyPopulation);

//// Function Expressions
const percentageOfWorld2 = function (population) {
  let percentagePopulation = ((population / 7900) * 100).toFixed(1);
  return `${percentagePopulation}%`;
};

ChinaPopulation = percentageOfWorld2(1441);
ItalyPopulation = percentageOfWorld2(86);
GermanyPopulation = percentageOfWorld2(66);
console.log('China ' + ChinaPopulation);
console.log('Italy ' + ItalyPopulation);
console.log('Germany ' + GermanyPopulation);
