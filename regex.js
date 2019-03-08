let regexp = /t.[a-z]*t/;
let regexp = /E+/;

let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

"First Second".replace(/(\w+)\s(\w+)/, '$2 $1'); // "Second First" 

let originalText = "I am good.";
let targetRegex = /good/;
let replaceText = "well, thank you";
let result = originalText.replace(targetRegex, replaceText);
