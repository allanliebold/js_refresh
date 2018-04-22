// Budget Controller
var budgetController = (function() {

  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  
  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  
  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };
  
  return {
    addItem: function(type, des, val) {
      var newItem, ID;
      
      // Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;  
      }
      
      // Create new inc or exp type item
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);  
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }
      
      // Push into data structure
      data.allItems[type].push(newItem);
      
      // Return new element
      return newItem;
    }
  };
    
})();
  

// UI Controller
var UIController = (function() {
  
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }
  
  return {
    getInput: function() {
      return { // returns an object with the properties type, description, and value
        type: document.querySelector(DOMstrings.inputType).value, // either 'inc' for income or 'exp' for expense  
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      }
    }
    
    getDomStrings: function() {
      return DOMstrings;
    }
  };  
})();


// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings(); // to access the DOMstrings object from the UI Controller

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
  
    document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || event.which === 13) { // which is for older browsers
        ctrlAddItem();  
      }
    });
  };
  
  
  var ctrlAddItem = function() {
    var input, newItem;
    
    // 1. Get the field input data
    input = UICtrl.getInput();
    
    // 2. Add item to budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    
    // 3. Add new item to UI
    // 4. Calculate budget
    // 5. Display budget on the UI
  
  };
  
  return {
    init: function() {
      console.log('Application has started');
      setupEventListeners();
    }
  };
  
})(budgetController, UIController);

controller.init();

