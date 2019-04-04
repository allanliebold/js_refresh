// Objects
// This is an object literal
var bob =  {
  name: 'Bob',
  lastName: 'Smith',
  age: 25,
  job: 'teacher',
  married: false
};

// Accessing data in an object
console.log(bob.lastName);
console.log(bob['lastName']); // Bracket notation uses strings for key names
var xyz = 'job'; 
console.log(bob[xyz]); // returns 'teacher'

// Mutating data in an object
bob.name = 'Robert'; // Dot notation 
bob[xyz] = 'developer'; // Bracket notation. Remember that xyz is actually referencing the string 'job'

var jane = new Object(); // Creates an empty object
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
    console.log(currentYear - this.yearOfBirth); 
  }
}

var jack = Object.create(personProto);
jack.name = 'Jack';
jack.yearOfBirth = 1977;
jack.job = 'mercenary';

var jane = Object.create(personProto,
{
  name: { value: 'Jane' },
  yearOfBirth: { value: 1982 } ,
  job:  { value: 'entrepeneur' }
});

// Primitives as objects
var a = 23;
var b = a;
a = 46;
console.log(a); // shows 46
console.log(b); // shows 23

var obj1 = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);

var years = [1990, 1964, 1942, 2000, 1991];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i])); 
  }
  return arrRes;
};

// Closures
function retirement(retirementAge) {
     var a = ' years left until retirement.';
     return function(yearOfBirth) {
          var age = 2018 - yearOfBirth;
	  console.log((retirementAge - age) + a);
     }
}

var retirementUS = retirement(66);
retirementUS(1984);

var retirmementGermany = retirement(65);
var retirementIceland(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

function interviewQuestion(job) {
     return function(name) {
          if (job === 'designer') {
               console.log(name + ', please explain an aspect of design.');
          } else if (job === 'teacher') {
               console.log(name + ', what subject do you teach?');
          } else {
               console.log(name + ', please talk about what you do.');
          }
     }
}
interviewQuestion('other')('Jon');

// Bind, Call, Apply
var john = {
     name: 'John',
     age: 26,
     job: 'teacher',
     presentation: function(style, timeOfDay) {
          if (style === 'formal') {
               console.log('Good ' + timeOfDay + ', ladies and gentlemen! My name is ' + this.name + ' and I am a(n) ' + this.job + '.');
          } else if (style === 'friendly') {
               console.log('Hey! What\'s up? I hope you're having a good ' + timeOfDay + '. I\'m ' + this.name + ' and I\'m a(n) ' + this.job + '.'); 
          }
     }
} 

var mindy = {
      name: 'Mindy',
      age: 34,
      job: 'coder'
};

john.presentation('formal', 'morning');
john.presentation.call(mindy'friendly', 'afternoon'); // method borrowing
john.presentation.apply(mindy, ['friendly', 'afternoon']); // apply is similar to call but takes an array

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('evening'); 
johnFriendly('afternoon'); // currying

var mindyFormal = john.presentation.bind(mindy, 'formal');
mindyFormal('morning');

// More practice with objects
const robot = {
	model: '1E78V2',
	energyLevel: 100,
	provideInfo() {
		// The 'this' keyword is required to access the object's properties, even with an attached method. 
		return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;	
	},
	checkEnergy: () => {
   		console.log(`Energy is currently at ${this.energyLevel}%.`);
  	}
}

// lexical arrow functions bind to the global scope. this won't work here. 
// Use a function expression as in provideInfo

console.log(robot.provideInfo());

// Getters and Setters
const droid = {
	_name: 'Droidy',
	get droidName() {

	}
}

// Prototype object
function User(firstName, lastName, age, gender) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.gender = gender;
}

var user1 = new User('John', 'Smith', 27, 'male');

User.prototype.emailDomain = '@email.com';

// If you look at user1 now it will not have an emailDomain, 
// but emailDomain will exist under its dunder proto (__proto__) property

User.prototype.getEmailAddress = function() {
	return this.firstName + this.lastName + this.emailDomain;
}

user1.getEmailAddress();
// JohnSmith@email.com
