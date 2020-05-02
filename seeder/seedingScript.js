/* eslint-disable no-console */
const { connection } = require('../db/index.js');
const { createStoreInventory, createRandomProducts } = require('./helpers.js');

const insertStores = (callback) => {
  const storeList = createStoreInventory(100);
  const query = 'INSERT INTO stores (store_name, store_address, product_id, product_availability) VALUES ?';

  connection.query(query, [storeList], (err, result) => {
    if (err) {
      callback(err);
    }
    console.log(`Number of records inserted: ${result.affectedRows}`);
    callback(null);
  });
};

const insertProducts = (callback) => {
  const productList = createRandomProducts(100);
  const query = 'INSERT INTO products (product_name, price, review_count, rating, theme_name, theme_image_url, featured, choking_hazard, product_limit, product_image_url) VALUES ?';

  connection.query(query, [productList], (err, result) => {
    if (err) {
      callback(err);
    }
    console.log(`Number of records inserted: ${result.affectedRows}`);
    insertStores(callback);
  });
};

const init = () => {
  insertProducts((err) => {
    if (err) {
      throw err;
    }
    connection.end();
  });
};

init();
