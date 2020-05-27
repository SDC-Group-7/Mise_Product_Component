DROP DATABASE IF EXISTS product_componentPG;

CREATE DATABASE product_componentPG;

USE product_componentPG;

CREATE TABLE products (
  productId INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(255),
  price FLOAT NOT NULL,
  reviewCount INT NOT NULL,
  rating FLOAT NOT NULL,
  themeName VARCHAR(255),
  themeImageUrl VARCHAR(255),
  featured VARCHAR(255),
  chokingHazard BOOLEAN,
  productLimit INT NOT NULL,
  productAvailabilityOnline BOOLEAN,
  PRIMARY KEY(productId)
);

CREATE TABLE stores (
  storeId INT NOT NULL AUTO_INCREMENT,
  storeName VARCHAR(255),
  storeZip INT,
  PRIMARY KEY (storeId)
);

CREATE TABLE availabilities (
  availabilityId INT AUTO_INCREMENT,
  productId INT,
  storeId INT,
  inStoreAvailable BOOLEAN
  PRIMARY KEY (availabilityId)
  FOREIGN KEY (productId) REFERENCES products(productId)
  FOREIGN KEY (storeId) REFERENCES stores(storeId)
);