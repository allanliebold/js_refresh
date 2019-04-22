// Scope
// Hoisting
calculateAge(1980); // function called before it is declared

function calculateAge(year) {
  console.log(2018 - year);
}

// Function expression
retirement(1965); 
// function called before function expression below. This won't run

var retirement = function(year) {
  console.log(65 - (2018 - year)); 
}

// Lexical scope
var a = "Hello";
first();

function first() {
  var b = "Hi";
  second();
  function second() {
    var c = "Hey";
    console.log(a + b + c);
  }
}

function third() {
  var d = "Hay";
  console.log(a + b + c + d); // b and c cannot be accessed by the third function
}

// this keyword
console.log(this); // will log the Window object
function exampleFunction() {
  console.log(this);  
}

exampleFunction(); // will still log the Window object

var exampleObject = {
  objectFuction = function() {
    console.log(this);
    function innerFunction() {
      console.log(this);
    }
    innerFunction(); // this innerFunction will log the Window object, even though it is inside the exampleObject object
  }
}

exampleObject.objectFunction(); // will log the exampleObject object

var john = {
 name: "John",
 yearOfBirth: 1966,
 calculateAge = function(yearOfBirth) {
  console.log(this); // logs the john object
  return 2018 - yearOfBirth; 
 }
}

var bob = {
  name: "Bob",
  yearOfBirth: 1983;
}

bob.calculateAge = john.calculateAge; // method borrowing
bob.calculateAge(); // this will log the bob object, not john

// Scope chain

function foo() {
  console.log(myvar); 
}

function goo() {
  var myvar = 1;
  foo();
}
// calling goo will throw an error. The scope chain is defined lexically. 

// The 'this' keyword
console.log(this); // this is the global window object
this.myVar = 1; 

console.log(this.myVar); // prints 1
console.log(window.myVar); // also prints 1
console.log(myVar); // this will also print 1. 
// this and window are the same, and myVar is a global variable

var thisVar = {
  checkThis: function() {
    console.log(this); 
  }
}

thisVar.checkThis(); 
console.log(thisVar); // in this case this refers to the checkThis function

var func = thisVar.checkThis;
func(); // will log the global object again. Determined by the calling context. 

