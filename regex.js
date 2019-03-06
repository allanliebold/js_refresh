
"First Second".replace(/(\w+)\s(\w+)/, '$2 $1'); // "Second First" 

let originalText = "I am good.";
let targetRegex = /good/;
let replaceText = "well";
let result = originalText.replace(targetRegex, replaceText);
