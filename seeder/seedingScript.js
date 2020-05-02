/* eslint-disable no-console */
const { connection } = require('../server/db/index.js');
const { createStoreInventory, createRandomProducts } = require('./helpers.js');

const insertStores = () => {
  const storeList = createStoreInventory(100);
  const query = 'INSERT INTO stores (store_name, store_address, product_id, product_availability) VALUES ?';

  connection.query(query, [storeList], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(`Number of records inserted: ${result.affectedRows}`);
  });
};

const insertProducts = () => {
  const productList = createRandomProducts(100);
  const query = 'INSERT INTO products (product_name, price, review_count, rating, theme_name, theme_image_url, featured, choking_hazard, product_limit, product_image_url) VALUES ?';

  connection.query(query, [productList], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(`Number of records inserted: ${result.affectedRows}`);
  });
};

insertProducts();
insertStores();

connection.end();
