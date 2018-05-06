// let and const

//ES5
var name5 = 'Jane Smith';
var age5 = 27;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 27;
name6 = 'Jane Miller'; // error: Assignment to constant variable. const is immutable.
console.log(name6);

// var is function-scoped. let and const are block-scoped

function driverseLicense6(passedTest) {
  if (passedTest) {
    let firstName = 'Jon';
    const yearOfBirth = 1980;
  }
 console.log(firstName + ' was born in ' + yearOfBirth); // won't work because of scoping.
}

driversLicense6(true);

/*
let firstName;

if(passedTest) {
  firstName = 'Jon';
}

This works because of where firstName was declared. Can't do the same for const since it's immutable.
*/

let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i); 0, 1, 2, 3, 4
}

console.log(i); // 23

// IIFEs
// ES5
(function() {
  var c = 3;
})();

// ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}

console.log(c);

// Strings in ES6
let firstName = 'Jon';
let lastName = 'Snow';
const yearOfBirth = 1980;
function calcAge(year) {
  return 2018 - year; 
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + ' and he was born in ' + yearOfBirth + '. He is ' + calcAge(yearOfBirth) + ' years old.');

// ES6. Template literals. Use back ticks `

console.log(`This is ${firstName} ${lastName} and he was born in ${yearOfBirth}. He is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes('on'));
console.log('The King in the North'.repeat(5));

// Lexical Arrow Functions

const years = [1990, 1967, 1977, 1982];

// ES5
var ages5 = years.map(function(el) {
  return 2018 - el;  
});

// ES6
let ages6 = years.map(el => 2018 - el); 

// In ES6 lexical arrow functions, return is implicit. 

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}`);
console.log(ages6);
  
// Multiple lines need to use curly braces and return is no longer implicit.

ages6 = years.map((el, index) =>  {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}`;
});
console.log(ages6);


