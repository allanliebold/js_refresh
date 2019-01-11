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

// Spread Operator

// ES5
var arr = [6, 89, 3, 45];
var maximus = Math.max(arr); // NaN

// apply is necessary because Math.max(arr) will take arr as a single NaN argument. 
var maximus = Math.max.apply(null, arr); // 89

// ES6
// The spread operator will separate each index of the array to pass as individual arguments.
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); 
const minimus = Math.min(...arr);
console.log(maximus); // 89
console.log(minimus); // 3

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; 
})();
console.log(arr2); // JAN,FEB,MAR,APR,MAY

// Destructuring Assignment

// ES5
var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

// ES6
const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54

// You can also assign the values to different variables. 
const { x : a, y : b, z : c } = voxel;
// assign value of x to a, y to b, z to c. 
console.log(a); // 3.6

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  const { tomorrow : tempOfTomorrow } = avgTemperatures; 
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // 79
