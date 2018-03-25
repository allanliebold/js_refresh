// Hoisting

calculateAge(1980); // function called before it is declared

function calculateAge(year) {
  console.log(2018 - year);
}

// Function expression

var retirement = function(year) {
  console.log(65 - (2018 - year)); 
}
