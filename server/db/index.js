const mysql = require('mysql');
const PASSWORD = require('./config.js')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: PASSWORD,
  database: 'product_component'
});

connection.connect();

module.exports.connection = connection;
