// Budget Controller
var budgetController = (function() {

  
  
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
    
    // 1. Get the field input data
    var input = UICtrl.getInput();
    console.log(input);
    
    // 2. Add item to budget controller
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

