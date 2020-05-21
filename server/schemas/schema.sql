DROP DATABASE IF EXISTS product_componentPG;

CREATE DATABASE product_componentPG;

USE product_componentPG;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
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
  PRIMARY KEY(id)
);

CREATE TABLE stores (
  id INT NOT NULL AUTO_INCREMENT,
  storeName VARCHAR(255),
  storeAddress VARCHAR(255),
  productId INT NOT NULL,
  productAvailability BOOLEAN,
  PRIMARY KEY (id),
  FOREIGN KEY (productId) REFERENCES products(id)
);