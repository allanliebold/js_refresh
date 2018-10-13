// Select all rows from the Flower database and log the ones with petal_color blue. 

const db = require('./db');

db.each('SELECT * FROM Flower', (error, row) => {
  if(row.petal_color === 'blue') {
    console.log(row);
  }
});

// Find the price for each shirt in the Clothing database and log the total price of all of them. 

const db = require('./db');
let totalPrice = 0;

db.each(
  'SELECT price FROM Clothing WHERE item="shirt");
