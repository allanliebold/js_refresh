// Convert Celsius to Fahrenheit
const convertToF = (celsius) => (celsius * 9/5) + 32;

// Reverse String (without using reverse method)
function reverseString(str) {
  let strArr = str.split('');
  let reverseArr = [];
  for(let i = strArr.length; i > -1; i--) {
    reverseArr.push(strArr[i]); 
  }
  return reverseArr.join('');
}

// Factorialize (with recursion)
const factorialize = (num) => num == 0 ? 1 : num * factorialize(num - 1);

// Return length of longest word in a string
function findLongestWordLength(str) {
  let wordArr = str.split(' ');
  let longest = 0;
  
  for(let i = 0; i < wordArr.length; i++) {
    if(wordArr[i].length > longest) longest = wordArr[i].length; 
  }  
  return longest; 
}

// Using Reduce
function findingLongestWordLength(str) {
  return str.split(' ').reduce(function(acc, curr) {
    return Math.max(acc, curr.length);
  }, 0);
}

// Using Spread Operator to find min and max number in an array
let data = [253, 43, 999, 107, 781, 2];

function getMin(data) {
  return Math.min(...data); 
}

function getMax(data) {
  return Math.max(...data); 
}

function largestofFour(arr) {
  let largest = [];
  for(let i = 0; i < arr.length; i++) {
    largest.push(arr[i].reduce((acc, curr) => Math.max(acc, curr), arr[i][0]))
  }
  
  return largest;
}

largestOfFour([[4,5,1,3], [13,27,18,26],[32,35,37,39],[1000,1001,857,1]]);

function confirmEnding(str, target) {
  return str.slice(target.length - (target.length * 2)) == target;
}

function confirmEnding(str, target) {
   return str.slice(-Math.abs(target.length)) == target;
}

function repeatStringNumTimes(str, num) {
  let newStr = '';
  while(num > 0) {
    newStr += str;
    num--;
  }
  return newStr;
}
repeatStringNumTimes("abc", 3);

function truncateString(str, num) {
  return num >= str.length ? str : str.slice(0, num) + '...';
}
truncateString("abracadabra", 4); // abra...

function findElement(arr, func) {
  let answer = undefined;
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      answer = arr[i];
      break;
    }
  }
  return answer;
}

// Sum all numbers in a range
//Basic 
function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var sum = 0;
  for (var i = min; i <= max; i++) {
    sum += i; 
  }
  return sum; 
}

//Intermediate
function sumAll(arr) {
  var sortedArr = arr.sort((a,b) => a-b); 
  return (arr[1] - arr[0] + 1) * (arr[0] + arr[1]) / 2; 
}

//Advanced
function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

//Find the differences between two arrays
function diffArray(arr1, arr2) {
  var newArr = [];
  
  function compareArr(first, second) {
    for(let i = 0; i < first.length; i++) {
      if(!second.includes(first[i]) {
        newArr.push(first[i]);   
      }
    }
  }
  compareArr(arr1, arr2);
  compareArr(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

