// JavaScript Tutorial

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

// Increment
a++;

console.log(a);

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

myFunction();

function functionWithArg(arg) { 
    console.log("This function accepts an arg. The arg is: " + arg);
}

functionWithArg(5); // This function accepts an arg. The arg is: 5

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
  console.log("Test Not Equal Function");
  if(str != "Bad string") {
    return "This is fine."; 
  }
  return "This is not fine.";
}

testNotEqual("Okay.");
