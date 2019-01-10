// ES6 Tutorial
// let is block scoped
var x = 1;
{ 
  let x = 2;
  console.log(x); // 2
}
console.log(x); // 1

// const can't be reassigned, but a const array can be mutated
const myArr = [1, 2, 3];
myArr[0] = 0;
console.log(myArr); // 0, 2, 3

// Higher Order Arrow Functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // Filter realNumberArray to return only positive integers. Then use map to return a new array with these integers squared.
  return realNumberArray.filter((num) => num >= 0 && Number.isInteger(num))
                        .map((num) => num * num);
};

// Declare a const called squareIntegers to store the return value of squareList, with realNumberArray passed as its argument.
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers); // 16, 1764, 36

// Rest Operator
function countArgs(...args) {
  return args.length + ' arguments passed.';
}

console.log(countArgs(1, 2, 3)); // 3 arguments passed.

const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(2, 2, 5)); // 9
