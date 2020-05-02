const { connection } = require('../db/index.js');

const getProductData = (id, callback) => {
  const query = `SELECT * FROM products WHERE id=${id}`;

  connection.query(query, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

const getStoreData = (id, callback) => {
  const query = `SELECT * FROM stores WHERE product_id=${id}`;

  connection.query(query, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

module.exports = {
  getProductData,
  getStoreData,
};
