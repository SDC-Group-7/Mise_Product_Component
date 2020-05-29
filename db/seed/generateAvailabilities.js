/*
100,000 products for each store
*/
const fs = require('fs');
const path = require('path');
const _ = require('underscore');
const { getRandomInt } = require('./randomizers');

const AVAILS_FILE = path.join(__dirname, './csvData', 'availabilities.csv')
const TOTAL_AVAILS = 100000000;
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

const inventories = ArrayInfiniteGenerator(Array(40).fill(0).map(() => getRandomInt(1, 9)));

function generateAvailabilities(startId, totalAvails, productStartId) {
  let availabilitySet = [];
  let proCount = productStartId;
  let stoCount = 1;
  let idCount = startId;
  while (availabilitySet.length < totalAvails) {
    for (let p = proCount; p < proCount + 10; p++) {
      for (let s = stoCount; s < stoCount + 10; s++) {
        let availability = {
          availabilityId: idCount,
          productId: p,
          storeId: s,
          inventory: inventories.next().value,
        };
        idCount++;
        availabilitySet.push(availability);
      }
    }
    proCount += 10;
    stoCount += 10;
    if (stoCount > 1000) {
      stoCount = 1;
    }
  }
  return availabilitySet;
}


module.exports = generateAvailabilities;
