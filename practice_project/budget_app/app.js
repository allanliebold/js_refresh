var budgetController = (function() {
  var x = 23;
  
  var add = function(a) {
    return x + a;  
  }
  
  return {
    publicTest: function(b) {
      return add(b); 
    }
  }
  
})();
  
budgetController.x // undefined
budgetController.add(5) // not a function
budgetController.publicTest(5) // returns 28


var UIController = (function() {
  
  
  
})();

var controller = (function(budgetCtrl, UICtrl) {

  var z = budgetCtrl.publicTest(5);
  
  return {
    anotherPublic: function() {
      console.log(z);  
    }
  }
  
})(budgetController, UIController);

controller.anotherPublic(); // logs 28 
