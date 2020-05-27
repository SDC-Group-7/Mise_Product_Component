/* eslint-disable no-console */
const { connection } = require('../db/index.js');
const { createStores, createProducts } = require('./helpers.js');

const insertStores = (callback) => {
  const storeList = createStores(100);
  const query = 'INSERT INTO stores (storeName, storeAddress, productId, productAvailability) VALUES ?';
  connection.query(query, [storeList], (err, result) => {
    if (err) {
      console.log(err);
      callback(err);
    }
    console.log(`Number of records inserted: ${result.affectedRows}`);
    callback(null);
  });
};

/*
-insert products calls insert products again once first insertion is completed
-need count outside of insert products
-insert product increments count everytime it runs
-once count = specified max count, stop recursively calling insert products
 */

const insertProducts = (callback) => {
  const productList = createProducts(100);
  const query = 'INSERT INTO products (productName, price, reviewCount, rating, themeName, themeImageUrl, featured, chokingHazard, productLimit, productAvailabilityOnline) VALUES ?';
  connection.query(query, [productList], (err, result) => {
    if (err) {
      console.log(err);
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
