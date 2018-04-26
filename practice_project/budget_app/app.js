// Budget Controller
var budgetController = (function() {
  // Expense object constructor
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };
  
  Expense.prototype.calcPercentage = function(totalIncome) {
    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1; 
    }
  };
  
  Expense.prototype.getPercentage = function() {
     return this.percentage;
  };
  
  // Income object constructor
  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  
  var calculateTotal = function(type) {
    var sum = 0;
    data.allItems[type].forEach(function(curr) {
      sum = sum + curr;
    });
  };
  
  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1 // percentage may be 0, so it is set to -1 by default to show it does not exist yet
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
    },
    
    deleteItem: function(type, id) {
      var ids, index;
      
      ids = data.allItems[type].map(function(current) {
        return current.id; 
      });
      
      index = ids.indexOf(id);
      
      if (index !== -1) {
        data.allItems[type].splice(index, 1); 
      }
      
    },
    
    calculateBudget: function() {
      calculateTotal('exp');
      calculateTotal('inc');
      
      // Calculate budget. Income - Expenses
      data.budget = data.totals.inc - data.totals.exp;
      
      // Calculate percentage of income spent. 
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1; 
      }
      
    },
    
    calculatePercentages: function() {
      
      data.allItems.exp.forEach(function(curr) {
        curr.calcPercentage(data.totals.inc);
      }); 
    },
    
    getPercentages: function() {
      var allPercentages = data.allItems.exp.map(function(curr) {
        return curr.getPercentage();
      });
      
      return allPercentages;
    },
    
    getBudget: function() {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      };
    }
  };
    
})();
  

// UI Controller
var UIController = (function() {
  
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses_list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container'
  }
  
  return {
    getInput: function() {
      return { // returns an object with the properties type, description, and value
        type: document.querySelector(DOMstrings.inputType).value, // either 'inc' for income or 'exp' for expense  
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value) 
        // value is a string and must be parsed into a usable float number
      };
    },
    
    addListItem: function(obj, type) {
      var html, newHtml, element;
      
      // Create HTML string with placeholder text
      if (type ==='inc') { 
        element = DOMstrings.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value"> 
        %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
        </div></div></div>';
      } else if (type == 'exp') {
        element = DOMstrings.expensesContainer;
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value"> 
        %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
        </div></div></div>';  
      }
      
      // Replace placeholder text with actual data
      newHtml = html.replace('%id%', obj.id);
      newHtml = html.replace('%description%', obj.description);
      newHtml = html.replace('%value%', obj.value);
      
      // Insert HTML into the DOM  
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },
    
    deleteListItem: function(selectorID) {
      var el = document.getElementById(selectorID);
      
      el.parentNode.removeChild() 
    },
    
    clearFields: function() {
      var fields, fieldsArr;
      
      fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
      fieldsArr = Array.prototype.slice.call(fields); 
      // the call method must be used on the Array prototype slice method, passing in fields, because it is not an Array.
    
      fieldsArr.forEach(function(current, index, array) {
        current.value = ""; // loop through each array element and set to an empty string, clearing it
      }); 
      
      fieldsArr[0].focus(); // reset the focus to the description field, index 0 of the fields array
    },
    
    displayBudget: function(obj) {
      
      document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
      document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
      document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;
      
      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = '---'; 
      }
    },
    
    displayPercentages: function(percentages) {
      
    },
    
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
    
    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    
  };
  
  var updateBudget = function() {
    
    // Calculate budget
    budgetCtrl.calculateBudget();
        
    // Return the budget
    var budget = budgetCtrl.getBudget();    
    
    // Display the budget in the UI
    UICtrl.displayBudget(budget);    
  };
  
  var updatePercentages = function() {
    // 1. Calculate percentages
    budgetCtrl.calculatePercentages();
    
    // 2. Read percentages from budget controller
    var percentages = budgetCtrl.getPercentages();
    
    // 3. Update the UI 
    console.log(percentages);
    
  };
  
  var ctrlAddItem = function() {
    var input, newItem;
    
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // 1. Get the field input data
      input = UICtrl.getInput();
    
      // 2. Add item to budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    
      // 3. Add new item to UI
      UICtrl.addListItem(newItem, input.type);
    
     // 4. Clear the fields
      UICtrl.clearFields();    
    
     // 5. Calculate and update budget
      updateBudget(); 
    }
  };
  
  var ctrlDeleteItem = function(event) {
    var itemID, splitID, type, ID;
    
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    
    if (itemID) {
      
      splitID = itemID.split('-');
      type = splitID[0];
      ID = parseInt(splitID[1]);
      
      // 1. Delete item from data structure
      budgetCtrl.deleteItem(type, ID);
            
      // 2. Remove item from UI
      UICtrl.deleteListItem(itemID);
      
      // 3. Update and show new budget
      updateBudget();     
      
      // 4. Calculate and update percentages
      updatePercentages();
    }
  };
  
  return {
    init: function() {
      // call displayBudget method with a budget object and default values
      UICtrl.displayBudget({
        budget: 0, 
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
      setupEventListeners();
    }
  };
  
})(budgetController, UIController);

controller.init();

