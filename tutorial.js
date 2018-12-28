// JavaScript Basics Tutorial

// Single line comment

/* 
  Multi line comment
*/

// Variables
var myName; 
var a = 9;
var b;
b = a;

var camelCase;
var PascalCase;

// Increment
console.log(a); // 9
a++;
console.log(a); // 10

// Decrement
console.log(b); // 9
b--;
console.log(b); // 8

// Strings
var doubleQuotes = "Quotes \"within\" quotes";
var singleQuotes = 'Quotes "within" quotes';

var escapeChars = 'First\nSecond\n\t\\Third';
var concatString = 'First part and ' + ' the Second part';

var anotherString = "This is the beginning. ";
anotherString += "The End.";

var aWord = "Something";
var firstLetter = aWord[0];
var lastLetter = aWord[aWord.length - 1];

// Function
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "There was a " + myAdjective + " " + myNoun + " that " + myAdverb + " " + myVerb + ".";
  return result;
}

wordBlanks("dog", "big", "ran", "quickly");

var numArr = [21, 55, 9999];
var firstNum = numArr[0];
var multiDimensional = [['arr1-1', 1], ['arr1-2', 2]]

function myFunction() {
  console.log("This is my function.");
}

myFunction(); // This is my function.

// Passing an argument to a function
function functionWithArg(arg) { 
    console.log("This function accepts an arg. The arg is: " + arg);
}

functionWithArg(5); // This function accepts an arg. The arg is: 5
functionWithArg("Something"); // This function accepts an arg. The arg is: Something

function trueOrFalse(bool) {
  if (bool) {
    return "It's true";
  }
  return "False."
}

function testEqual(num) {
  if(num == 10) {
    return "num equals 10";
  }
  return "num does not equal 10";
}

console.log(testEqual(5)); // num does not equal 10
console.log(testEqual(10)); // num equals 10

function testNotEqual(str) {
  if(str != "Bad string") {
    return "This is fine."; 
  }
  return "This is not fine.";
}

console.log(testNotEqual("Okay.")); // This is fine.
console.log(testNotEqual("Bad string")); // This is not fine.

function whatIsMyFunction(func) {
  if(func == "You pass butter") {
    console.log("Oh my god...");
  } else {
    console.log("Does not compute."); 
  }
}

whatIsMyFunction("You pass butter"); // Oh my god...
whatIsMyFunction("Error"); // Does not compute.

// Comparative operators
function howManyEggs(eggs) {
  if(eggs < 12) {
    console.log("This is not enough eggs...");
  } elif (eggs > 12) {
    console.log("This is too many eggs...");
  } else {
    console.log("Perfect.");
  }
}

howManyEggs(4); // This is not enough eggs...
howManyEggs(200); // This is too many eggs...
howManyEggs(12); // Perfect.

// The && and || Operators
function andOperator(this, that) {
  if(this && that) {
    console.log("Everything checks out.");
  } elif(this || that) {
    console.log("Half right.");
  } else {
    console.log("Something is missing."); 
  }
}

andOperator(true, true); // Everything checks out.
andOperator(false, false); // Something is missing. 
andOperator(true, false); // Half right.

// Golf
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if(strokes == 1) {
    return names[0];
  }
}

golfScore(5, 4);
