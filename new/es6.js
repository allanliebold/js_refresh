// New ES6 concepts tutorial
//ES5 - var
var name5 = 'Jane Smith';
var age5 = 27;
name5 = 'Jane Miller';
console.log(name5);

//ES6 - let and const
const name6 = 'Jane Smith';
let age6 = 27;
name6 = 'Jane Miller'; // error: Assignment to constant variable. const is immutable (well, kind of. More later.)
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

Note - const is actually not completely immutable. The binding of const is immutable but the values contained can be 
reassigned. For example, if you declare an array as a const, the values of the indices can be changed. 

Here's a better definition. "Variables declared using const are not immutable. Using const only means that the variable 
will always have a reference to the same object or primitive value, because that reference can't change. The reference 
itself is immutable, but the value held by the variable does not become immutable."
*/

let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i); 0, 1, 2, 3, 4
}

console.log(i); // 23

// IIFEs - Immediately Invoked Function Expressions
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

// In ES6 lexical arrow functions, the return is implicit as long as the function is contained on one line. 
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}`);
console.log(ages6);
  
// Multiple lines need to use curly braces and return is no longer implicit.
ages6 = years.map((el, index) =>  {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}`;
});
console.log(ages6);

// 'this' keyword with arrow functions

//ES5 - 'this' doesn't work the way it's used here
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}
box5.clickMe();

//ES6 - context works differently with an arrow function, so 'this' is trying to access the global object here.
const box6 = {
  color: 'blue',
  position: 1,
  clickMe: () => {
      document.querySelector('.blue').addEventListener('click', function() {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}
box6.clickMe();

function Person(name) {
  this.name = name; 
}

// ES5
Person.prototype.friends5 = function(friends) {
  var arr = friends.map(function(el) {
    return this.name + ' is friends with ' + el;
  }.bind(this));
  console.log(arr);
}
var friends = ['Emily', 'Fam', 'Lorenzo'];
new Person('Bino').friends5(friends);

var john = [];

// ES6
Person.prototype.friends6 = function(friends) {
  var arr = friends.map(function(el => `${this.name} is friends with ${el}`);
  console.log(arr);
}

var john = [];

// Destructuring

// ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];

// ES6
const [name, age] = ['Bob', 33];
console.log(name);
console.log(age);

const obj = {
  firstName: 'Bill',
  lastName: 'Williams'
};

const {firstName, lastName} = obj;
const {firstName: a, lastName: b} = obj;

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1988);

// Arrays

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

// Rest Parameters

// ES5
function isFullAge5(limit) {
  console.log(arguments); // arguments is an array-like structure.

  var argsArr = Array.prototype.slice.call(arguments, 1); // this turns arguments into an actual array
  // slice starts at position 1 of arguments, skipping the age limit argument

  argsArr.forEach(function(curr) {
    console.log((2018 - curr) >= limit);
  })
}

isFullAge5(21, 1985, 1955, 2015); // true, true, false
isFullAge5(18, 1990, 2003, 2000); // true, false, true

// ES6
function isFullAge6(limit, ...years) { // this turns the arguments into an array automatically
  years.forEach(curr => console.log((2018 - curr) >= limit));
}

isFullAge6(21, 1985, 1955, 2015);

// spread operator is used in function call while rest operator is used in function declaration, 
// to accept an arbitrary number of arguments

// Default Parameters

// ES5

function SmithPerson(firstName, lastName, yearOfBirth, nationality) {
  lastName === undefined ? lastName = 'Smith' : lastName = lastName;
  nationality === undefined ? nationality = 'American' : nationality = nationality; 

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 'Smith'); 

// ES6
function SmithPerson6(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var bob = SmithPerson6('Bob', 1955); 

// Maps
const question = new Map();
question.set('question', 'What is the official name of the latest major version of JavaScript?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'JS6');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Incorrect');

/*
if(question.has(4)) {
  question.delete(4); 
}

question.clear(); // deletes all elements from map
*/

// Maps are iterable. They can be looped through, unlike objects.

question.forEach((value, key) => console.log(`This is %{key}, set to %{value}`));

for (let [key, value] of question.entries) {
  if(typeof(key) === 'number') {
    console.log(`Answer %{key}: %{value}`);
  }
}

const ans = parseInt(prompt('Enter the correct answer'));
console.log(question.get(ans === question.get('correct'))); 

// Classes

// ES5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calcAge = function() {
  var age = new Date().getFullYear - this.yearOfBirth;
  console.log(age);
}

var john5 = new Person('John', 1990, 'teacher');

// ES6 - Class definitions are not hoisted
class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
  }
// Static class. Not inherited
  static greeting() {
    console.log('Hello!');
  }
}

const bob6 = new Person6('Bob', 1980, 'businessman');
Person6.greeting(); // 'Hello!'

// Subclasses

var Athlete5 = function(name, yearOfBirth, job, competitions, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.competitions = competitions;
  this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

var billAthlete5 = new Athlete5('Bill', 1991, 'swimmer', 3, 10);

billAthlete5.calculateAge();
billAthlete5.medalsWon();

// ES6
class Athlete5 extends Person6 {
  constructor(name, yearOfBirth, job, competitions, medals) {
    super(name, yearOfBirth, job);
    this.competitions = competitions;
    this.medals = medals;
  }
  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const burtAthlete6 = new Athlete6('Burt', 1970, 'runner', 5, 5);
