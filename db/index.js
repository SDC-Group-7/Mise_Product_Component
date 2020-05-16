const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '13.52.53.38',
  user: 'root',
  password: '',
  database: 'product_component',
});

connection.connect();
module.exports.connection = connection;
