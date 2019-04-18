// Arrays Tutorial 
const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(curr) {
  curr.style.backgroundColor = 'dodgerblue';
});

// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(curr => curr.style.backgroundColor = 'dodgerblue');

// ES5
for(var i = 0; i < boxesArr5.length; i++) {
  if(boxesArr5[i].className === 'box blue') {
    continue;
  }
  boxesArr5[i].textContent = 'Changed to blue';
}

// ES6
for (const curr of boxesArr6) {
  if (curr.className === 'box blue') {
    continue;
  }
  curr.textContent = 'Changed to blue';
}

// ES5
var ages = [12, 16, 8, 21, 14, 31];
var full = ages.map(function(curr) {
  return curr >= 18;
});

console.log(full);
console.log(full.indexOf(true)); // logs 3, the first index that returned true

// ES6
console.log(ages.findIndex(curr => curr >= 18)); // 3
console.log(ages.find(curr => curr >= 18)); // 21

// Spread Operator
function addFourAges (a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 20, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3); 

const familySmith = ['Bob', 'Bill', 'Betty'];
const familyMiller = ['Mary', 'Marty', 'Moe'];
const bigFamily = [...familySmith, ...familyMiller];

console.log(bigFamily); // ['Bob', 'Bill', 'Betty', 'Mary', 'Marty', 'Moe'];

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
Array.from(all).forEach(curr => curr.style.color = 'purple');

