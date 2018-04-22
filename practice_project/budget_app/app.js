// Budget Controller
var budgetController = (function() {

  
  
})();
  

// UI Controller
var UIController = (function() {
  
  
  
})();


// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function() {
    // 1. Get the field input data
    // 2. Add item to budget controller
    // 3. Add new item to UI
    // 4. Calculate budget
    // 5. Display budget on the UI
  
    console.log('Test');
  }
  
  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
  
  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) { // which is for older browsers
      ctrlAddItem();  
    }
  });
  
})(budgetController, UIController);

