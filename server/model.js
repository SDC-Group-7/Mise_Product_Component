const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.PG_USER || 'akshajmody',
  password: process.env.PG_PASSWORD || '',
  host: process.env.PG_HOST || 'localhost',
  database: 'sdctest',
});

const getProductData = (id, callback) => {
  const query = `SELECT * FROM products WHERE productId=${id}`;

  pool.query(query, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

const getStoreData = (id, searchQuery, callback) => {
  const query = `SELECT * FROM availabilities WHERE (productId=${id} AND storeId=(SELECT storeId FROM stores WHERE storeZip=${searchQuery}))`;

  pool.query(query, (err, results) => {
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
