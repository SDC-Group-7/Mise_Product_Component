DROP DATABASE IF EXISTS sdctest;

CREATE DATABASE sdctest;

\c sdctest

CREATE TABLE products (
  productId INT PRIMARY KEY,
  productName VARCHAR(255),
  price FLOAT,
  reviewCount INT,
  rating FLOAT,
  themeName VARCHAR(255),
  themeImageUrl VARCHAR(255),
  featured VARCHAR(255),
  chokingHazard BOOLEAN,
  productLimit INT,
  productAvailabilityOnline BOOLEAN
);

CREATE TABLE stores (
  storeId INT PRIMARY KEY,
  storeName VARCHAR(255),
  storeZip INT
);

CREATE TABLE availabilities (
  availabilityId INT PRIMARY KEY,
  productId INT,
  storeId INT,
  inventory SMALLINT
);

COPY products(productId, productName, price, reviewCount, rating, themeName, themeImageUrl, featured, chokingHazard, productLimit, productAvailabilityOnline) FROM '/Users/akshajmody/Documents/Hack Reactor SF COHORT 127 /SDC FOLDER/ProductComponent/db/seed/csvData/products.csv' WITH DELIMITER ',';

COPY stores(storeID, storeName, storeZip) FROM '/Users/akshajmody/Documents/Hack Reactor SF COHORT 127 /SDC FOLDER/ProductComponent/db/seed/csvData/stores.csv' WITH DELIMITER ',';

COPY availabilities(availabillityId, productId, storeId, inventory) FROM '/Users/akshajmody/Documents/Hack Reactor SF COHORT 127 /SDC FOLDER/ProductComponent/db/seed/csvData/availabilities.csv' WITH DELIMITER ',';
