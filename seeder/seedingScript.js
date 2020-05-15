/* eslint-disable no-console */
const { connection } = require('../db/index.js');
console.log('=========import connection==========');
const { createStoreInventory, createRandomProducts } = require('./helpers.js');
console.log('===========import helpers==================');

const insertStores = (callback) => {
  const storeList = createStoreInventory(100);
  const query = 'INSERT INTO stores (storeName, storeAddress, productId, productAvailability) VALUES ?';
  console.log('==================STARTING STORES QUERY================');
  connection.query(query, [storeList], (err, result) => {
    if (err) {
      console.log(err);
      callback(err);
    }
    console.log(`Number of records inserted: ${result.affectedRows}`);
    callback(null);
  });
};

const insertProducts = (callback) => {
  const productList = createRandomProducts(100);
  const query = 'INSERT INTO products (productName, price, reviewCount, rating, themeName, themeImageUrl, featured, chokingHazard, productLimit, productImageUrl, productAvailabilityOnline) VALUES ?';
  console.log('==================STARTING PRODCUTS QUERY================');
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
  console.log('============INITIATING===============');
  insertProducts((err) => {
    if (err) {
      throw err;
    }
    connection.end();
  });
};

console.log('+++++++++++++++++_+_+_+_+_+_+_+');
init();
