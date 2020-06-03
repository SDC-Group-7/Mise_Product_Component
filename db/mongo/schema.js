const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/product_component', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', function() {
  console.log('CONNECTED TO MONGO DATABASE')
});

// PRODUCT SCHEMA------------------------------------------------------
const ProductSchema = mongoose.Schema({
  productId: Number,
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

// PRODUCT SCHEMA -----------------------------

const ProductSchema = mongoose.Schema({
  productId: Number,
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


// STORE SCHEMA----------------------------------

const StoreSchema = mongoose.Schema({
  storeId: Number,
  storeName: String,
  storeZip: Number,
});

const Store = mongoose.model('Stores', StoreSchema);


// AVAILABILITIES SCHEMA-------------------------

const AvailabilitySchema = mongoose.Schema({
  availabilityId: Number,
  productId: Number,
  storeId: Number,
  inventory: Number,
});

const Availability = mongoose.model('Availability', AvailabilitySchema);

module.exports = {
  findAllProducts,
  findProduct,
  saveProduct,
  dropProduct,
};


//$LOOKUP (AGGREGATION)