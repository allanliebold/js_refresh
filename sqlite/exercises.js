// Select all rows from the Flower database and log the ones with petal_color blue. 

const db = require('./db');

db.each('SELECT * FROM Flower', (error, row) => {
  if(row.petal_color === 'blue') {
    console.log(row);
  }
});

const db = require('./db');

db.all('SELECT * FROM Scientist WHERE field="biology"', (err, row) => {
  console.log(row);
});

const db = require('./db');

db.each('SELECT * FROM CartoonCharacter WHERE species="mouse"', (err, row) => {
  if(row.species === 'mouse') {
    console.log(row.height);
  }
});

// Find the price for each shirt in the Clothing database and log the total price of all of them. 

const db = require('./db');
let totalPrice = 0;

db.each(
  'SELECT price FROM Clothing WHERE item="shirt"',
  (err, row) => {
    totalPrice += row.price;
  },
  (err, numRows) =>{
		console.log(totalPrice);
  }
);

// With db.each there are three arguments. The first is the database query. The second argument, a callback, called on each row that is returned. 
// The third argument is another callback called after all other rows have been retrieved. 
// In this case, the query selects each row of the Clothing database's price column where the item column is 'shirt'. 
// With each shirt, the second argument takes that row's price property and adds its value to a previously declared totalPrice variable.
// Finally, the third argument is called after the second argument has added all of the shirt prices to the totalPrice, and it logs that 
// final totalPrice value to the console.

// db.serialize allows database methods to run synchonously. 
const db = require('./db');

db.serialize(() => {
	db.run('CREATE TABLE Popcorn (id INTEGER PRIMARY KEY, type TEXT)');
	db.run('INSERT INTO POPCORN (type) VALUES ("cheddar")');
	db.run('INSERT INTO POPCORN (type) VALUES ("kettle corn")');
});

// Placeholders let you use variables in database queries. Placeholder names begin with $. 

const selectByGenre = genre => {
	db.all('SELECT title FROM Song WHERE genre=$genre', {
    $genre: genre
  });
}
