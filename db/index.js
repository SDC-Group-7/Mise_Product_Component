const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: '',
  database: 'product_component',
});

connection.connect();
console.log('=========Connected============');
module.exports.connection = connection;
