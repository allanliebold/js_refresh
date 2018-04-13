// Objects

// Object literal
var bob =  {
  name: 'Bob',
  lastName: 'Smith',
  age: 25,
  job: 'teacher',
  married: false
};

// Accessing data in object
console.log(bob.lastName);
console.log(bob['lastName']); // bracket notation uses string for key name

var xyz = 'job';
console.log(bob[xyz]); // returns 'teacher'

// Mutating data in object
bob.name = 'Robert';
bob[xyz] = 'developer';

var jane = new Object(); // creates empty object
jane.name = 'Jane';
jane.lastName = 'Jones';
jane['age'] = 30;
jane['job'] = 'scientist';
jane['married'] = true;

var currentYear = 2018;

var jack = {
  name: 'Jack',
  yearOfBirth: 1980,
  calculateAge: function() {
    return currentYear - this.yearOfBirth; 
  }
}

var jackAge = jack.calculateAge();
jack.age = jackAge; 

// Object constructor
function Person(name, lastName, yearOfBirth = 1900, job, married = false) {
    this.name = name;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.age = currentYear - this.yearOfBirth;
    this.job = job;
    this.married = married;
};

var bill = new Person("Bill", "Jones", 1965, "Farmer", true);
var steve = new Person("Steve", "Stevens", 1980, "Writer", false);

console.log(bill.name + " " + bill.lastName + " was born in " + bill.yearOfBirth);
console.log(steve.name + " " + steve.lastName + " is a " + steve.age + "-year-old " + steve.job);

// Numbers, strings, booleans, Undefined, and Null are Primitives.
// Everything else is an Object. Arrays, Functions, Objects, Dates, Wrappers

// Inheritance
// An Athlete is also a Person, and so would inherit the properties of the Person constructor
// Prototype property
// Everything inherits from the Object object

var Person = function(name, yearOfBirth, job) { // function constructor variable name is capitalized
  this.name = name; 
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() { // attaches method to Person constructor's prototype property
  console.log(2018 - this.yearOfBirth); 
};

Person.prototype.lastName = 'Smith';

var garth = new Person('Garth', 1980, 'musician'); // Instantiation of new Person using constructor function.
var wayne = new Person('Wayne', 1979, 'tv host');

garth.calculateAge(); 
wayne.calculateAge(); 
console.log(garth.lastName); // will log 'Smith'

// Object.create
var personProto = {
  calculateAge: function() {
    console.log(2018 - this.yearOfBirth); 
  }
}

var jack = Object.create(personProto);
