// Arrays
var names = ['John', 'Jane', 'Mark', 'Bob'];
var years = new Array(1990, 1985, 1950);

console.log(name[0] + ' was born in ' + years[0]);

var types = [true, 10, 'string'];
types.push('blue'); // adds element at end of array

console.log(types);

types.unshift(5); // adds element at beginning of array
types.pop(); // removes element at end of array
types.shift(); // removes element at beginning of array

types.indexOf(10); // should return 1, since 10 is types[1]

if (types.indexOf('nothing') === -1) {
  console.log('nothing is not in array');
}

// Loops
// for loop
for (var i = 0; i < names.length; i++) {
  console.log(names[i]); 
}

// while loop

counter = 10;
while (counter > 0) {
  console.log("Looping");
  counter--; 
}

// do while loop
// Always executes the code once, then checks if the condition is true
var w = 0;

do {
  console.log('Is ' + w + ' bigger than 1?');
  w--;
}

while(w > 1);

console.log('Nope!'); 
