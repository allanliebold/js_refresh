// Lexical Arrow Functions
const years = [1990, 1967, 1977, 1982];

// ES5
var ages5 = years.map(function(el) {
  return 2018 - el;  
});

// ES6
let ages6 = years.map(el => 2018 - el); 

// In ES6 lexical arrow functions, return is implicit. 
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}`);
console.log(ages6);
  
// Multiple lines need to use curly braces and return is no longer implicit.

ages6 = years.map((el, index) =>  {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}`;
});
console.log(ages6);

// 'this' keyword with arrow functions

//ES5 - 'this' doesn't work the way it's used here
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}
box5.clickMe();

//ES6 - context works differently with an arrow function, so 'this' is trying to access the global object here.
const box6 = {
  color: 'blue',
  position: 1,
  clickMe: () => {
      document.querySelector('.blue').addEventListener('click', function() {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}
box6.clickMe();

function Person(name) {
  this.name = name; 
}

// ES5
Person.prototype.friends5 = function(friends) {
  var arr = friends.map(function(el) {
    return this.name + ' is friends with ' + el;
  }.bind(this));
  console.log(arr);
}
var friends = ['Emily', 'Fam', 'Lorenzo'];
new Person('Bino').friends5(friends);

// ES6
Person.prototype.friends6 = function(friends) {
  var arr = friends.map(function(el => `${this.name} is friends with ${el}`);
  console.log(arr);
}

new Person('Don').friends6(friends);

