// Basic Data Structures
let firstArr = ['first', 'second', 'third'];

firstArr.unshift('zero');
firstArr.push('fourth');
console.log(firstArr); // zero, first, second, third, fourth

firstArr.pop();
console.log(firstArr); // zero, first, second, third

let shifted = firstArr.shift();
console.log(firstArr); // first, second, third
console.log(shifted); // zero

let spliceArr = ['This', 'array', 'has', 'some', 'extra', 'words'];
let removedWord = spliceArr.splice(4, 1);

console.log(spliceArr); // This, array, has, some, words
console.log(removedWord); // extra

function sumRemaining(arr) {
  arr.splice(2,2);
  return arr.reduce((a, b) => a + b);
}

console.log(sumRemaining([2, 5, 1, 5, 2, 1])); // 10

// indexOf
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates') // -1, does not exist in array
fruits.indexOf('oranges') // 2
fruits.indexOf('pears') // 1, the first index at which the element exists

function quickCheck(arr, elem) {
  return arr.indexOf(elem);
}

// const quickCheck = (arr, elem) => arr.indexOf(elem);
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// combine arrays with spread operator
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

console.log(thatArray); // ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', 'how', ...fragment, 'is', 'fun'];
  return sentence;
}

console.log(spreadOut()); // learning,how,to,code,is,fun
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

for (let user in users) {
  console.log(user);
};

// Alan, Jeff, Sarah, Ryan

function whoIsOnline(obj) {
  let onlineUsers = 0;
  for(let item in obj) {
    if(obj[item].online == true) 
      onlineUsers++;
  }
  
  return onlineUsers;
}

console.log(whoIsOnline(users)); // 2

// Linked List
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, previous) {
  this.value = value;
  this.next = next;
  this.previous = previous; 
}

LinkedList.prototype.addToHead = function() {
  var newNode = new Node(value, this.head, null); 
  this.head != null ? this.head.prev = newNode : this.tail = newNode;
  this.head = newNode;
};

LinkedList.prototype.addToTail = function() {
  var newNode = new Node(value, null, this.tail);
  this.tail != null ? this.tail.next = newNode : this.head = newNode;
  this.tail = newNode; 
}

var ll = new LinkedList();
ll.addToHead(50);
console.log(ll);
// { head: { value: 100, next: null, prev: null},
//   tail: { value: 100, next: null, prev: null} }

ll.addToHead(5);
ll.addToHead(200);
ll.addToHead(150);
ll.addToTail(25);
ll.addToTail(10);
ll.addToHead(45);
console.log(ll);
