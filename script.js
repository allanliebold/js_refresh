/* var name = 'Al';
console.log('Hello ' + name);

var age = 33;
console.log(age);
*/

var name = 'John';
var age = 26;
var married = false;

console.log('Name: ' + name);

if (married == true) {
  console.log(name + ' is married'); 
} else {
  console.log(name + ' is not married'); 
}

if (age >= 21) {
  console.log(name + ' is 21 or older'); 
} else if (age >= 18) {
  console.log(name + ' is an adult'); 
} else {
  console.log(name + ' is a minor'); 
}
