const fs = require('fs');
const path = require('path');
const generateProducts = require('./generateProducts.js');

const PRODUCTS_FILE = path.join(__dirname, './csvData', 'products.csv');


/*
TOTAL_PRODUCTS = 10000000
TOTAL_STORES = 1000
NUMBER_OF_STORES_CARRYING_EACH_PRODUCT = 10
PRODUCTS_PER_STORE = TOTAL_PRODUCTS / TOTAL_STORES * NUMBER_OF_STORES_CARRYING_EACH_PRODUCT

generate stores
  - one csv
generate products
  - 10 products csvs
  - every product should generate NUMBER_OF_STORES_CARRYING_EACH_PRODUCT entries in availability

availabilities
  - 10 csvs
  - for product id 1
    - at stores 1 - 10
    - increment store until hit TOTAL_STORES and then reset to 1 and start over
*/
function main() {
  let products = generateProducts(1, 10);
  products = products.map((product) => Object.values(product).join(','));
  fs.writeFile(PRODUCTS_FILE, products.join('\n'), 'utf8', (err) => {
    if (err) return console.error(err);
    console.log('Written?');
  })
}

main();