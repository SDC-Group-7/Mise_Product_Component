DROP DATABASE IF EXISTS sdctest;

CREATE DATABASE sdctest;

CREATE TABLE products (
  productId INT,
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
  storeId INT,
  storeName VARCHAR(255),
  storeZip INT,
  PRIMARY KEY (storeId)
);

CREATE TABLE availabilities (
  availabilityId INT,
  productId INT,
  storeId INT,
  inventory SMALLINT,
  PRIMARY KEY (availabilityId)
  FOREIGN KEY (productId) REFERENCES products(productId)
  FOREIGN KEY (storeId) REFERENCES stores(storeId)
);

\c sdctest