// Select all rows from the Flower database and log the ones with petal_color blue. 

const db = require('./db');

db.each('SELECT * FROM Flower', (error, row) => {
  if(row.petal_color === 'blue') {
    console.log(row);
  }
});
