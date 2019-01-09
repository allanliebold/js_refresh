// ES6 Tutorial

// Higher Order Arrow Functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  const filteredArr = realNumberArray.filter((num) => num >= 0 && Number.isInteger(num)).map((num) => num * num);
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers); // 16, 1764, 36
