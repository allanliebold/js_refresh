const { printQueryResults } = require('./utils');
const sqlite3 = require('sqlite3');

const db = new sqlite.Database('./db.sqlite');

db.all("SELECT * FROM TemperatureData" (error, rows) => {
  
});
