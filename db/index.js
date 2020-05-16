const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: '',
  database: 'product_component',
});

connection.connect();
module.exports.connection = connection;
