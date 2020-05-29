/*
1000 Stores
*/
const { mockStores, mockZips } = require('./exampleStoresData.js');
const { getRandomInt } = require('./randomizers');


function* infiniteGenerator(array) {
  let index = 0;

  while (true) {
    index += 1;
    if (index === array.length) {
      index = 0;
    }
    yield array[index];
  }
}

const storeNamesIdx = infiniteGenerator(Array(50).fill(0).map(() => {
  return getRandomInt(0, mockStores.length - 1);
}));
const randomZipCodes = infiniteGenerator([0,1,2]);

function generateStore(storeId) {
  const storeName = mockStores[storeNamesIdx.next().value];
  const storeZip = mockZips[randomZipCodes.next().value] + storeId + 22;

  return {
    storeId,
    storeName,
    storeZip,
  };
}

function generateStores(startId, totalStores) {
  let count = 0;
  const stores = [];
  while (count < totalStores) {
    stores.push(generateStore(startId + count));
    console.log('Generated Store Number: ', (startId + count));
    count++;
  }
  return stores;
}


module.exports = generateStores;
