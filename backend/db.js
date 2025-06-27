const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Tutu@1234', // change if needed
  database: 'patientdb',
  port: 3306// change if your MySQL runs on another port
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected');
});

module.exports = db;
