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

function calculateAge(el) {
   return 2018 - el;
}

function fullAge(el) {
   return el >= 18;    
}

function maxHeartRate(el) {
   if(el >= 18 && el <= 81) {
      return Math.round(206.9 - (0.67 * el));
   }   
   
   return -1; // if person is not between 18 and 81 then heart rate cannot be calculated 
}

var ages = arrayCalc(years, calculateAge); // calculate age is passed in as the callback function
var fullAges = arrayCalc(ages, fullAge); // full age is passed in as the callback function
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates); 

// Functions returning functions

function interviewQuestions(job) {
   if (job === 'designer') {
      return function(name) {
         console.log(name + ', please explain the design concept of...');
      }
   } else if (job === 'teacher') {
      return function(name) {
         console.log(name + ', what subject do you teach?');  
      }
   } else {
      return function(name) {
         console.log(name + ', can you explain what you do?');  
      }
   }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('Bob');
designerQuestion('Bill'); 

interviewQuestion('teacher')('Mark'); // without storing as a variable
interviewQuestion('anthropologist')('Gordon'); 

// IIFE - Immediately Invoked Function Expression

/*
function game() {
   var score = Math.random() * 10;
   console.log(score >= 5);
}
game();
*/

(function () {
   var score = Math.random() * 10;
   console.log(score >= 5);
})();

// Second example
