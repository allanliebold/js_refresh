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

let spliceArr = ['This', 'array', 'has', 'some', 'extra', 'words'];
let removedWord = spliceArr.splice(4, 1);
console.log(spliceArr); // This, array, has, some, words
console.log(removedWord); // extra
