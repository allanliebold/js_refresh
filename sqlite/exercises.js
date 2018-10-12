const db = require('./db');

db.each('SELECT * FROM Flower', (error, row) => {});
