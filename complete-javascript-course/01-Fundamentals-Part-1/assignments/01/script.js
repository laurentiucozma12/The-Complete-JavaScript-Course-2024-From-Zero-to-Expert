// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were right
let result;

result = '9' - '5';
console.log(typeof result, result); // number, 4

result = '19' - '13' + '17';
console.log(typeof result, result); // string, "617"

result = '19' - '13' + 17;
console.log(typeof result, result); // number, 23

result = '123' < 57;
console.log(typeof result, result); // boolean, false

result = 5 + 6 + '4' + 9 - 4 - 2;
console.log(typeof result, result); // number, 1143
