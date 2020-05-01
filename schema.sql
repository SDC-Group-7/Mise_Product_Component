DROP DATABASE IF EXISTS product_component;

CREATE DATABASE product_component;

USE product_component;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255),
  price FLOAT NOT NULL,
  review_count INT NOT NULL,
  rating INT NOT NULL,
  theme_name VARCHAR(255),
  theme_image_url VARCHAR(255),
  featured VARCHAR(255),
  choking_hazard BOOLEAN,
  product_limit INT NOT NULL,
  product_image_url VARCHAR(255),
  PRIMARY KEY(id),
);

CREATE TABLE stores (
  id INT NOT NULL AUTO_INCREMENT,
  store_name VARCHAR(255),
  store_address VARCHAR(255),
  product_id INT NOT NULL,
  product_availability BOOLEAN,
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);