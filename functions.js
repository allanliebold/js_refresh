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
© 2018 GitHub, Inc.
