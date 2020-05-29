const fs = require('fs');
const path = require('path');
const generateProducts = require('./generateProducts.js');
const generateStores = require('./generateStores.js');
const generateAvailabilities = require('./generateAvailabilities');

const PRODUCTS_FILE = path.join(__dirname, './csvData', 'products.csv');
const TOTAL_PRODUCTS = 10000000;
const BATCH_SIZE = 10000;
const LOG_FREQUENCY = 100000;

const STORES_FILE = path.join(__dirname, './csvData', 'stores.csv');
const TOTAL_STORES = 1000;
const STORE_IDSTART = 1;

const AVAILS_FILE = path.join(__dirname, './csvData', 'availabilities.csv');
const TOTAL_AVAILS = 100000000;

function convertToCsvLines(array) {
  const csvLines = array.map((obj) => Object.values(obj).join(','));
  csvLines.push(''); // necessary to add newline character to end of batch
  return csvLines.join('\n');
}

function main() {
  const productWriter = fs.createWriteStream(PRODUCTS_FILE);
  const storeWriter = fs.createWriteStream(STORES_FILE);
  const availabilityWriter = fs.createWriteStream(AVAILS_FILE);

  generateAndWriteData(productWriter, () => {
    console.log('Product done');
  }, TOTAL_PRODUCTS, generateProducts);

  generateAndWriteData(availabilityWriter, () => {
    console.log('Product done');
  }, TOTAL_AVAILS, generateAvailabilities);

  const storeData = convertToCsvLines(generateStores(STORE_IDSTART, TOTAL_STORES));
  storeWriter.write(storeData, 'utf8');
  storeWriter.on('finish', () => {
    console.log(TOTAL_STORES, 'converted to CSV');
  });
  storeWriter.end();
}


function generateAndWriteData(writer, callback, totalVar, generate) {
  let id = 1;
  let proStart = 1;
  let lastLog = 0;
  let batch;

  function write() {
    let ok = true;
    while (id <= totalVar && ok) {
      batch = convertToCsvLines(generate(id, BATCH_SIZE, proStart));
      id += BATCH_SIZE;
      proStart += 1000;

      if (id === totalVar) {
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
    if (id <= totalVar) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }

  write();
}

main();
