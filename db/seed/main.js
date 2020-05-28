const fs = require('fs');
const path = require('path');
const generateProducts = require('./generateProducts.js');
const generateStores = require('./generateStores.js');

const PRODUCTS_FILE = path.join(__dirname, './csvData', 'products.csv');
const TOTAL_PRODUCTS = 10000000;
const BATCH_SIZE = 1000;
const LOG_FREQUENCY = 100000;

const STORES_FILE = path.join(__dirname, './csvData', 'stores.csv');
const TOTAL_STORES = 1000;
const STORE_IDSTART = 1;

const AVAILS_FILE = path.join(__dirname, './csvData', 'availabilities.csv');
const TOTAL_AVAILS = 100000000;
const AVAILS_IDSTART = 1;

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
function convertToCsvLines(array) {
  const csvLines = array.map((obj) => Object.values(obj).join(','));
  csvLines.push(''); // necessary to add newline character to end of batch
  return csvLines.join('\n');
}

function main() {
  const productWriter = fs.createWriteStream(PRODUCTS_FILE);
  const storeWriter = fs.createWriteStream(STORES_FILE);
  generateAndWriteData(productWriter, () => {
    console.log('done?');
  });
  const storeData = convertToCsvLines(generateStores(STORE_IDSTART, TOTAL_STORES));
  storeWriter.write(storeData, 'utf8');
  storeWriter.on('finish', () => {
    console.log(TOTAL_STORES, 'converted to CSV');
  });
  storeWriter.end();
}


function generateAndWriteData(writer, callback) {
  let id = 1;
  let lastLog = 0;
  let batch;

  function write() {
    let ok = true;
    while (id <= TOTAL_PRODUCTS && ok) {
      batch = convertToCsvLines(generateProducts(id, BATCH_SIZE));
      id += BATCH_SIZE;

      if (id === TOTAL_PRODUCTS) {
        writer.write(batch, 'utf8', callback);
      } else {
        if (id - lastLog > LOG_FREQUENCY) {
          console.log('WROTE BATCH:', id);
          lastLog = id;
        }
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(batch, 'utf8');
      }
    }
    if (id <= TOTAL_PRODUCTS) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }

  write();
}

main();
