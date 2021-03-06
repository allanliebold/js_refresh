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

// let
let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i); 0, 1, 2, 3, 4
}

console.log(i); // i is still 23 outside of the for loop

