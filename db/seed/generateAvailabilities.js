/*
100,000 products for each store
*/
const fs = require('fs');
const path = require('path');

const AVAILS_FILE = path.join(__dirname, './csvData', 'availabilities.csv')
const TOTAL_AVAILS = 100000000
const BATCH_SIZE = 10000;


function* ArrayInfiniteGenerator(array) {
  let index = 0;

  while (true) {
    index += 1;
    if (index === array.length) {
      index = 0;
    }
    yield array[index];
  }
}

const inventories = ArrayInfiniteGenerator(Array(40).fill(0).map(() =>
  getRandomInt(1, 9)));


let list = [];




function generateAvailability(availabilityId) {

  let availabilitySet = [];
  let proCounter = 1;
  let stoCount = 1

  function addBatch(productStart, storeStart)

  for (let p = proCount; i < proCount + 10; i++) {
    if ()

  }



  const productId =
  const storeId =
  const inventory = inventories.next().value;

}

function generateAvailabilities() {

}