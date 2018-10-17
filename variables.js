'use strict';

/* var name = 'Al';
console.log('Hello ' + name);

var age = 33;
console.log(age);
*/

// Example variables

var name = 'John'; // string
var age = 26; // int
var married = false; // bool

console.log('Name: ' + name);

// if/else statements

if (married == true) {
  console.log(name + ' is married'); 
} else {
  console.log(name + ' is not married'); 
}

if (age >= 65) {
  console.log(name + ' is a senior');
} else if (age >= 21) {
  console.log(name + ' is 21 or older'); 
} else if (age >= 18) {
  console.log(name + ' is an adult'); 
} else {
  console.log(name + ' is a minor'); 
}

// Scope
// Global scope
var thingy = 1;
window.moo = 1; 

// Function or Local scope
function myFunc() {
  var thingy = 2;   
}

// Block scope
// Hoisting
var a;
console.log(a);
a = 1; 
// variable is hoisted to the top of its available scope

foo(); // function hoisting

function foo() {
  console.log('This function was called before it was declared because of hoisting.'); 
}

// const and let in ES6 are not hoisted. They are block scope. 
