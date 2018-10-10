const { printQueryResults } = require('./utils');
const sqlite3 = require('sqlite3');

const ids = [5, 20, 43, 100];
const db = new sqlite.Database('./db.sqlite');
const newRow = {
  location: 'London, England',
  year: 1982
};

db.all("SELECT * FROM TemperatureData WHERE year = 1970" (error, rows) => {
  printQueryResults(rows);
});

ids.forEach(id => {
  db.get("SELECT * FROM TemperatureData WHERE id=$id",
    {
      $id: id
    },
    (error, row) => {
      printQueryResults(row);
    })
  }
);

db.run("INSERT INTO Temperature Data(location, year) VALUES($location, $year)", {
  $location: newRow.location,
  $year: newRow.year
}, function(error) {
  console.log(this.lastID);
});
