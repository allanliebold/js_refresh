// ES6 Tutorial

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
