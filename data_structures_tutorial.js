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

function sumRemaining(arr) {
  arr.splice(2,2);
  return arr.reduce((a, b) => a + b);
}

console.log(sumRemaining([2, 5, 1, 5, 2, 1])); // 10

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates') // -1, does not exist in array
fruits.indexOf('oranges') // 2
fruits.indexOf('pears') // 1, the first index at which the element exists

function quickCheck(arr, elem) {

}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
