// Hoisting

calculateAge(1980); // function called before it is declared

function calculateAge(year) {
  console.log(2018 - year);
}

// Function expression

retirement(1965); // function called before function expression below. This won't run

var retirement = function(year) {
  console.log(65 - (2018 - year)); 
}

// Lexical scope

var a = "Hello";
first();

function first() {
  var b = "Hi";
  
  function second() {
    
  }
}
