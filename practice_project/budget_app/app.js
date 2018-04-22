var budgetController = (function() {
  var x = 23;
  
  var add = function(a) {
    return x + a;  
  }
  
  return {
    publicTest: function(b) {
      console.log(add(b)); 
    }
  }
  
})();
  
budgetController.x // undefined
budgetController.add(5) // not a function

budgetController.publicTest(5) // returns 28
