const { printQueryResults } = require('./utils');
const sqlite3 = require('sqlite3');

const ids = [5, 20, 43, 100, 75];
const db = new sqlite.Database('./db.sqlite');
const newRow = {
  location: 'London, England',
  year: 1982,
  tempAvg: 17.48
};

db.all("SELECT * FROM TemperatureData WHERE year = 1970" (error, rows) => {
  printQueryResults(rows);
});

ids.forEach(id => {
  db.get("SELECT * FROM TemperatureData WHERE id=$id",
    {
      $id: id
    },
    function (error, row) {
      if(error) {
        return console.log(error);
      }
      printQueryResults(row);
    })
  });

db.run("INSERT INTO Temperature Data(location, year, temp_avg) VALUES($location, $year, $tempAvg)", {
  $location: newRow.location,
  $year: newRow.year,
  $tempAvg: newRow.tempAvg
}, function(error) {
  if(error) {
    console.log(error); 
  }
  console.log(this.lastID);
});
