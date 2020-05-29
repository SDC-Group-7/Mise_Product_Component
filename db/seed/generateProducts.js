/*
PRIMARY RECORD 10MM
*/
const {
  getRandomInt, getRandomRating, getRandomPrice, getRandomBoolean,
} = require('./randomizers');

const {
  mockThemes, mockFeatured, mockNames,
} = require('./exampleData.js');

function* makeInfiniteGenerator(array) {
  let index = 0;

  while (true) {
    index += 1;
    if (index === array.length) {
      index = 0;
    }
    yield array[index];
  }
}

// NOTE: array sizes below are arbitrary.
// They should be different so combinations are on different loops
// (keeps data looking random)
const productLimits = makeInfiniteGenerator(Array(20).fill(0).map(() => getRandomInt(3, 7)));
const booleans = makeInfiniteGenerator(Array(21).fill(0).map(() => getRandomBoolean()));
const ratings = makeInfiniteGenerator(Array(22).fill(0).map(() => getRandomRating(0, 5)));
const prices = makeInfiniteGenerator(Array(23).fill(0).map(() => getRandomPrice(10, 300)));
const reviewCounts = makeInfiniteGenerator(Array(24).fill(0).map(() => getRandomInt(1, 40)));
const mockThemeIdx = makeInfiniteGenerator(Array(24).fill(0).map(() => {
  return getRandomInt(0, mockThemes.length - 1);
}));
const mockFeaturedIdx = makeInfiniteGenerator(Array(24).fill(0).map(() => {
  return getRandomInt(0, mockFeatured.length - 1);
}));
const mockNamesIdx = makeInfiniteGenerator(Array(24).fill(0).map(() => {
  return getRandomInt(0, mockNames.length - 1);
}));

function generateProduct(productId) {

  const name = mockNames[mockNamesIdx.next().value];
  const price = prices.next().value;
  const reviewCount = reviewCounts.next().value;
  const rating = ratings.next().value;
  const theme = mockThemes[mockThemeIdx.next().value];
  const featured = mockFeatured[mockFeaturedIdx.next().value];
  const chokingHazard = booleans.next().value;
  const productLimit = productLimits.next().value;
  const availabilityOnline = booleans.next().value;

  return {
    productId,
    name,
    price,
    reviewCount,
    rating,
    themeName: theme.name,
    themeImageUrl: theme.themeURL,
    featured,
    chokingHazard,
    productLimit,
    availabilityOnline,
  };
}

function generateProducts(startId, batchSize) {
  let count = 0;
  const products = [];
  while (count < batchSize) {
    products.push(generateProduct(startId + count));
    count++;
  }
  return products;
}


module.exports = generateProducts;
