// SQLite tutorial 2
const { calculateAverages, addClimateRowToObject, logNodeError, printQueryResults } = require('./utils');
const sqlite = require('sqlite3');
const db = new sqlite.Database('./db.sqlite');
const temperaturesByYear = {};

db.serialize(() => { 
  db.run('DROP TABLE IF EXISTS Average', error => {
    if (error) {
      throw error;
    }
  })
  db.run('CREATE TABLE Average (id INTEGER PRIMARY KEY, year INTEGER NOT NULL, temperature REAL NOT NULL)', logNodeError);
  db.each('SELECT * FROM TemperatureData', (error, row) => {
    if (error) {
      throw error; 
    }
    addClimateRowToObject(row, temperaturesByYear);
  },
    error => {
      throw error;  
    }
  );
};
