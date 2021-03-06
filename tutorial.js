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

var c;

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

// Arrays
var myArray = []; // An empty array

// Function
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "There was a " + myAdjective + " " + myNoun + " that " + myAdverb + " " + myVerb + ".";
  
  return result;
}

wordBlanks("dog", "big", "ran", "quickly");

var numArr = [21, 55, 9999]; // Array with numbers
var firstNum = numArr[0]; // Assigning the value of the 0 index of numArr to a variable
var multiDimensional = [['arr1-1', 1], ['arr1-2', 2]];

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
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6]
  }
}

golfScore(5, 4); // Birdie
golfScore(4, 4); 

// Switch Statement
function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "delta";
      break;
    case 4:
      answer = "gamma";
      break;
    case 5:
    case 6:
    default:
      answer = "invalid";
      break;
  }  
  return answer;  
}

caseInSwitch(1); // alpha

// Returning booleans

function isLess(a, b) {
  return a < b;
}

isLess(3, 4); // true
isLess(99999, 1); // false

function abTest(a, b) {
  if(a < 0 || b < 0) 
    return undefined;
  
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,2)); // 8

// Card Counter
var count = 0;

function cc(card) {
  var decision = '';

  switch(card) {
    case 2: case 3: case 4: case 5: case 6:
      count++;
      break;
    case 7: case 8: case 9:
      break;
    case 10: case 'J': case 'Q': case 'K': case 'A':
      count--;
      break;
    default:
      break;
  }  

  if(count > 0) {
    decision = 'Bet';
  } else {
    decision = 'Hold';
  }
  return count + ' ' + decision;
}

cc(2); cc(3); console.log(cc(7)); cc('K'); cc('A'); // will finally return 0 Hold

// Objects
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

var myDog = {
  "name": "Miles",
  "legs": 4,
  "tails": 2,
  "friends": ["Sanic"]
};

dogName = myDog.name;
console.log(dogName); // Miles

// Object hasOwnProperty method

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  return myObj.hasOwnProperty(checkProp) ? myObj[checkProp] : "Not Found";
}

console.log(checkObj("candy"));
console.log(checkObj("bed"));
console.log(checkObj("pet"));
console.log(checkObj("potato"));
console.log(checkObj("gift"));

// While Loop
var myArr = [];
var i = 0;
while(i < 5) {
  myArr.push(i);
  i++;
}

console.log(myArr); // [0, 1, 2, 3, 4]

// For Loop
var loopArr = [];
for(var j = 1; j < 6; j++) {
  loopArr.push(j);
}

console.log(loopArr); // [1, 2, 3, 4, 5]

for(var k = 5; k > 0; k--) {
  loopArr.pop();
}

console.log(loopArr); // []
console.log();
