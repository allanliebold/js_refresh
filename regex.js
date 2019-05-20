// Regex
let regexp = /t.[a-z]*t/;
let regexp = /E+/;

let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let findC = /C+/;
let matchedC = crowd.match(findC);
console.log(matchedC);

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr);

"First Second".replace(/(\w+)\s(\w+)/, '$2 $1'); // "Second First" 

let originalText = "I am good.";
let targetRegex = /good/;
let replaceText = "well, thank you";
let result = originalText.replace(targetRegex, replaceText);

function spinalCase(str) {
  let regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2'); 
  // Find any lowercase letterfollowed by uppercase letter, and replace with the same divided by a space 
  //Return the string with all spaces and underscores replaced with dashes and then convert to all lowercase
  
  return str.replace(regex, '-').toLowerCase(); 
}
