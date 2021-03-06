// SQLite Exercises
const db = require('./db');

// Select all rows from the Flower database and log the ones with petal_color blue. 
db.each('SELECT * FROM Flower', (error, row) => {
  if(row.petal_color === 'blue') {
    console.log(row);
  }
});

db.each('SELECT * FROM Flower')

// Select all rows with a specified parameter
db.all('SELECT * FROM Scientist WHERE field="biology"', (err, row) => {
  console.log(row);
});

// Select all rows with a specified parameter and log another parameter
db.each('SELECT * FROM CartoonCharacter WHERE species="mouse"', (err, row) => {
  console.log(row.height);
});

// Find the price for each shirt in the Clothing database and log the total price of all of them. 
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
db.serialize(() => {
	db.run('CREATE TABLE Popcorn (id INTEGER PRIMARY KEY, type TEXT)');
	db.run('INSERT INTO POPCORN (type) VALUES ("cheddar")');
	db.run('INSERT INTO POPCORN (type) VALUES ("kettle corn")');
});

// Placeholders let you use variables in database queries. Placeholder names begin with $. 
const selectByGenre = genre => {
	db.all('SELECT title FROM Song WHERE genre=$genre', { $genre: genre });
}

// Use Drop Table if Exists before creating a new table to ensure the new table is clear to start with. 
db.serialize(() => {
	db.run('DROP TABLE IF EXISTS Furniture');
	db.run('CREATE TABLE Furniture');
});

// LogCaffeine function. Create a function that takes in an argument name and uses it as a placeholder in a database query. 
const logCaffeineLevel = (name) => {
  db.get('SELECT * FROM Tea WHERE name=$name', { $name: name }, 
	(err, row) => {console.log(row.caffeine_level)});
};

// Insert a new row into a table with specified values
db.run('INSERT INTO Bridge (name, established_year) VALUES ("Brooklyn Bridge", 1883)');

// Get a specific row using two parameters with AND
db.get("SELECT traffic FROM TrainStation WHERE station_id=38 AND month='April'", (err, row) => {
  console.log(row.traffic);
});

// More practice with placeholders
const logFloorsForAddress = address => {
  db.get('SELECT number_of_floors FROM Building WHERE address=$address', {$address: address}, (err, row) => {
    console.log(row.number_of_floors);
  });
}

// Add a new row to the database with pre-set parameters
db.run('INSERT INTO BirdOfParadise (scientific_name, common_name) VALUES ("Cicinnurus regius", "king bird-of-paradise")');

// Add a new row to the database with user specified parameters using placeholders
const addMovie = (title, publicationYear, director) => {
	db.run('INSERT INTO Movie (title, publication_year, director) VALUES ($title, $publication_year, $director)', 
        {
    		$title: title,
    		$publication_year: publicationYear,
    		$director: director
  	});
};
