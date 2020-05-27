const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/product_component', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', function() {
  console.log('CONNECTED TO MONGO DATABASE')
});

// PRODUCT SCHEMA------------------------------------------------------
const ProductSchema = mongoose.Schema({
  productName: String,
  price: Number,
  reviewCount: Number,
  rating: Number,
  themeName: String,
  themeImageUrl: String,
  featured: String,
  chokingHazard: Boolean,
  productLimit: Number,
  productAvailabilityOnline: Boolean,
});

const Product = mongoose.model('Products', ProductSchema);

const saveProduct = (productData, callback) => {
  const productDocs = [];

  productData.forEach((asource) => {
    let oneProduct = new Product();
    let newDoc = Object.assign(oneProduct, asource);
    productDocs.push(newDoc);
  });

  Product.insertMany(productDocs, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};

const findAllProducts = (callback) => {
  Product.find({}).exec((err, allProducts) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, allProducts);
    }
  });
};

const findProduct = (id, callback) => Product.findOne({ productId: id }, callback);

const dropProduct = () => {
  Product.collection.drop();
};

// STORE SCHEMA------------------------------------------------------

const StoreSchema = mongoose.Schema({

});

const Store = mongoose.model('Stores', StoreSchema);

const saveStore = (storeData, callback) => {
  const storeDocs = [];

  storeData.forEach((asource) => {
    let oneStore = new Store();
    let newDoc = Object.assign(oneStore, asource);
    storeDocs.push(newDoc);
  });

  Store.insertMany(storeDocs, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};

const findAllStores = (callback) => {
  Store.find({}).exec((err, allStores) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, allStores);
    }
  });
};

const findStore = (id, callback) => Store.findOne({ storeId: id }, callback);

const dropStore = () => {
  Store.collection.drop();
};


// module.exports.findAllProducts = findAllProducts;
// module.exports.findProduct = findProduct;
// module.exports.saveProduct = saveProduct;
// module.exports.dropProduct = dropProduct;

module.exports = {
  findAllProducts,
  findProduct,
  saveProduct,
  dropProduct,
  findAllStores,
  findStore,
  saveStore,
  dropStore,
};
