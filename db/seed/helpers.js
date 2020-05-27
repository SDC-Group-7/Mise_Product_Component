const {
  mockThemes, mockFeatured, mockNames, mockNamesTwo, mockBool
} = require('./exampleData.js');
const {
  getRandomInt, getRandomRating, getRandomPrice, getRandomBoolean,
} = require('./randomizers');
const mockStores = require('./stores.js')

const createStores = (max) => {
  const storeList = [];
  let zipCounter = 57890;
  for (let i = 0; i < max; i += 1) {
    const storeNameV = mockStores[i].name;
    const storeIdV = i;
    const store = {
      storeId: storeIdV,
      storeName: storeNameV,
      storeZip: zipCounter,
    };
    storeList.push(store);
    zipCounter += 3;
  }
  return storeList;
};

const createProducts = (max) => {
  const productList = [];
  for (let i = 1; i <= max; i += 1) {
    let productId = i
    const name = mockNames[getRandomInt(0, mockNames.length - 1)];
    const price = getRandomPrice(10, 300);
    const reviewCount = getRandomInt(0, 100);
    const rating = getRandomRating(0, 5);
    const theme = mockThemes[getRandomInt(0, mockThemes.length - 1)];
    const featured = mockFeatured[getRandomInt(0, mockFeatured.length - 1)];
    const chokingHazard = getRandomBoolean();
    const productLimit = getRandomInt(3, 7);
    const availabilityOnline = getRandomBoolean();

    productList.push(
      [
        name,
        price,
        reviewCount,
        rating,
        theme.name,
        theme.themeURL,
        featured,
        chokingHazard,
        productLimit,
        theme.productURL,
        availabilityOnline,
      ],
    );
  }
  return productList;
};

module.exports = {
  createStores,
  createProducts,
};
