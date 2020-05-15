const _ = require('underscore');
console.log('===========import underscore==================');
// const { finance, commerce } = require('faker');
// console.log('===========import faker==================');
const { mockStores, mockThemes, mockFeatured } = require('./exampleData.js');
console.log('===========import mock data==================');
const createStoreInventory = (max) => {
  const storeList = [];
  for (let i = 0; i < mockStores.length; i += 1) {
    const { name, address } = mockStores[i];
    for (let j = 1; j <= max; j += 1) {
      const productId = j;
      const store = [name, address, productId, _.shuffle([true, false])[0]];
      storeList.push(store);
    }
  }
  return storeList;
};

const getRandomInt = (min, max) => (
  Math.floor(Math.random() * (Math.floor(max) - Math.floor(min)) + 1) + min
);
const getRandomPrice = (min, max) => getRandomInt(min, max) - 0.01;
const getRandomRating = (min, max, decimalPlace) => {
  // const rating = finance.amount(min, max, decimalPlace);
  const rating = 1;
  return Math.floor(rating) ? rating : 0;
};

const createRandomProducts = (max) => {
  const productList = [];
  for (let i = 1; i <= max; i += 1) {
    const randomFeatured = _.shuffle(mockFeatured)[0];
    const randomTheme = _.shuffle(mockThemes)[0];
    productList.push(
      [
        // commerce.productName(),
        'dog',
        getRandomPrice(10, 300),
        getRandomInt(0, 100),
        getRandomRating(0, 5, 1),
        randomTheme.name,
        randomTheme.themeURL,
        randomFeatured,
        _.shuffle([true, false])[0],
        getRandomInt(3, 10),
        randomTheme.productURL,
        _.shuffle([true, false])[0],
      ],
    );
  }
  return productList;
};

module.exports = {
  createStoreInventory,
  createRandomProducts,
};
