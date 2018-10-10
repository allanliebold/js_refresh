const { printQueryResults } = require('./utils');
const sqlite3 = require('sqlite3');

const ids = [5, 20, 43, 100];
const db = new sqlite.Database('./db.sqlite');
const newRow = {
  location: 'London, England'
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
