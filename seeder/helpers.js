const {mockStores, mockThemes, mockFeatured} = require('./exampleData.js');
const _ = require('underscore');
const faker = require('faker');

const createRandomStores = (max) => {
  const storeList = [];
  for (let i = 1; i <= max; i++) {
    let randomStore = _.shuffle(mockStores)[0];
    let store = [randomStore.name, randomStore.address, i, _.shuffle([true, false])[0]];
    storeList.push(store);
  }
  return storeList;
};

const createRandomProducts = (max) => {
  const indexes = _.range(1, max + 1);
  const productList = [];

  for (let i = 1; i <= max; i++) {
    productList.push([faker.commerce.productName(), getRandomPrice(10, 300), getRandomInt(0, 100), getRandomRating(0, 5, 1), _.shuffle(mockThemes)[0], 'some theme url', _.shuffle(mockFeatured)[0], _.shuffle([true, false])[0], getRandomInt(3, 10), 'randomURL']);
  }
  return productList;
};

const getRandomInt = (min, max) => (Math.floor(Math.random() * (Math.floor(max) - Math.floor(min)) + 1) + min);
const getRandomPrice = (min, max) => getRandomInt(min, max) - .01;
const getRandomRating = (min, max, decimalPlace) => {
  const rating = faker.finance.amount(min, max, decimalPlace);
  return Math.floor(rating) ? rating : 0;
};

module.exports = {
  createRandomStores: createRandomStores,
  createRandomProducts: createRandomProducts
}

