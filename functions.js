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

// Passing functions as objects

var years = [1988, 1945, 2015, 1885, 1966];

function arrayCalc(arr, fn) { // fn is a callback function
   var arrResult = [];
   for (var i = 0; i < arr.length; i++) {
      arrResult.push(fn(arr[i]));  
   }
   return arrResult;
}
