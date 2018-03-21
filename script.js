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

// if statements

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

// Functions

function calculateAge(yearOfBirth) {
   return 2018 - yearOfBirth;
}

var myAge = calculateAge(1984);
console.log(myAge);

function yearsUntilRetirement(name, yearOfBirth) {
  var age = calculateAge(yearOfBirth);
  var retirement = 65 - age;
  
  if (age > 0) {
    console.log(name + " will retire in " + retirement + " years"); 
  } else {
    console.log(name + " is already retired"); 
  }
}
}

// Function statement

function someFun(parameter) {
  // Performs an action
}

// Function expression

var someFun = function(parameter) {
  // Produces a value
}
