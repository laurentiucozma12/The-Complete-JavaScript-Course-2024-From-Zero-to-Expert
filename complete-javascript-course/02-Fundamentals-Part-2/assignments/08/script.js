// LECTURE: Iteration: The for Loop
// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
// The Complete JavaScript Course 17

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }

// LECTURE: Looping Arrays, Breaking and Continuing
// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is

// prettier-ignore
// const percentageOfWorld3 = (population) =>  `${((population / 7900) * 100).toFixed(1)}%`;

// let populations = [323, 166, 283, 18];
// console.log(populations);
// let percentages = [];

// for (let i = 0; i < populations.length; i++) {
//   percentages.push(percentageOfWorld3(populations[i]));
// }
// console.log(percentages);

// LECTURE: Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway �

// const listOfNeighbours = [
//   ['Canada', 'Mexico'],
//   ['Spain'],
//   ['Norway', 'Sweden', 'Russia'],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(listOfNeighbours[i][j]);
//   }
// }

// LECTURE: The while Loop
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?

const populations = [38, 126, 47, 5, 10, 144];

// prettier-ignore
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percentages3 = [];
let i = 0;
let perc;
while (i < populations.length) {
  perc = percentageOfWorld3(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
