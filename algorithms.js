
// Convert Celsius to Fahrenheit
cons convertToF = (celsius) => (celsius * 9/5) + 32;

// Reverse String (without using reverse method)
function reverseString(str) {
  let strArr = str.split('');
  let reverseArr = [];
  for(let i = strArr.length; i > -1; i--) {
    reverseArr.push(strArr[i]); 
  }
  return reverseArr.join('');
}

// Factorialize (with recursion)
const factorialize = (num) => num == 0 ? 1 : num * factorialize(num - 1);

// Return length of longest word in a string
function findLongestWordLength(str) {
  let wordArr = str.split(' ');
  let longest = 0;
  for(let i = 0; i < wordArr.length; i++) {
    if(wordArr[i].length > longest) longest = wordArr[i].length; 
  }
  
  return longest; 
}

// Using Reduce
function findingLongestWordLength(str) {
  
}
