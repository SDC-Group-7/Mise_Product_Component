const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: process.env.PASSWORD,
  database: 'product_component',
});

connection.connect();

module.exports.connection = connection;
