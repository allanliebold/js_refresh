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

console.log(bill.name + " " + bill.lastName + " was born in " + bill.yearOfBirth);
