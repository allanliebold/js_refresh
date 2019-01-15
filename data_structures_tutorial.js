// Basic Data Structures

let firstArr = ['first', 'second', 'third'];
firstArr.unshift('zero');
firstArr.push('fourth');
console.log(firstArr); // zero, first, second, third, fourth

firstArr.pop();
console.log(firstArr); // zero, first, second, third
let shifted = firstArr.shift();
console.log(firstArr); // first, second, third
console.log(shifted); // zero
