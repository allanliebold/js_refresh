// Objects

// Object literal

var bob =  {
  name: 'Bob',
  lastName: 'Smith',
  age: 25,
  job: 'teacher',
  married: false
};

// accessing data in object
console.log(bob.lastName);
console.log(bob['lastName']); // bracket notation uses string for key name

var xyz = 'job';
console.log(bob[xyz]); // returns 'teacher'

// mutating data in object
bob.name = 'Robert';
bob[xyz] = 'developer';

var jane = new Object(); // creates empty object
jane.name = 'Jane';
jane.lastName = 'Jones';
jane['age'] = 30;
jane['job'] = 'scientist';
jane['married'] = true;
