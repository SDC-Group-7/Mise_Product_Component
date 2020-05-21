const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/target', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', function() {
  console.log('CONNECTED TO MONGO DATABASE')
});

// /products/:id
const productSchema = mongoose.Schema({
  productName: String,
  price: Number,
  reviewCount: Number,
  rating: Number,
  themeName: String,
  themeImageUrl: String,
});


const Product = mongoose.model('Products', productSchema);

const save = (productData, callback) => {
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

const drop = () => {
  Product.collection.drop();
};

module.exports.findAllProducts = findAllProducts;
module.exports.findProduct = findProduct;
module.exports.save = save;
module.exports.drop = drop;
