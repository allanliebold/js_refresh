
// Convert Celsius to Fahrenheit
cons convertToF = (celsius) => (celsius * 9/5) + 32;

function reverseString(str) {
  let strArr = str.split('');
  let reverseArr = [];
  for(let i = strArr.length; i > -1; i--) {
    reverseArr.push(strArr[i]); 
  }
  return reverseArr.join('');
}
