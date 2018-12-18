// JavaScript Tutorial
/* 
  Multi line comment
*/
var myName; 
var a = 9;
var b;
b = a;

var camelCase;
a++;

console.log(a);

var doubleQuotes = "Quotes \"within\" quotes";
var singleQuotes = 'Quotes "within" quotes';
var escapeChars = 'First\nSecond\n\t\\Third';
var concatString = 'First part and ' + ' the Second part';
var anotherString = "This is the beginning. ";
anotherString += "The End.";

var aWord = "Something";
var firstLetter = aWord[0];
var lastLetter = aWord[aWord.length - 1];

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "There was a " + myAdjective + " " + myNoun + " that " + myAdverb + " " + myVerb + ".";
  return result;
}

wordBlanks("dog", "big", "ran", "quickly");
