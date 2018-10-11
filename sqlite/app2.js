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
};
