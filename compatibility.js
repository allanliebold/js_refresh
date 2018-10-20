// Compatibility

var pasta = 'Spaghetti'; // ES5
const meat = 'Pancetta'; // ES6
let sauce = 'Eggs and cheese'; //ES6

const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;

let esFivePercentageSupport = 95.88; // 95.88% of browsers support ES5, according to caniuse.com
let esSixTemplateLiterals = 88.05 // 88.05% of browsers support ES6 template literals

// Babel transpiles ES6 into ES5
// > npm run build
// > npm init 
// > npm install babel-cli -D
// > npm install babel-preset-env -D
