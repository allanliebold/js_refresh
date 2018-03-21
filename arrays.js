var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1985, 1950);

console.log(name[0] + ' was born in ' + years[0]);

var types = [true, 10, 'string'];
types.push('blue'); // adds element at end of array
console.log(types);
types.unshift(5); // adds element at beginning of array
types.pop(); // removes element at end of array
types.shift(); // removes element at beginning of array

types.indexOf(10); // should return 1, since 10 is types[1]
