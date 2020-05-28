# Leggo My Lego - Product Overview Module

> A fullstack application built with React, ExpressJS, and MySQL. This app serves as the product overview module for an ecommerce website where a user can add varying quantities to cart, add to wishlist, and check in-store availability.

## Table of Contents

1. [Requirements](#requirements)
1. [Getting Started](#gettingStarted)
1. [Run Application](#runApplication)
1. [Development](#development)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

You will need MySQL

- MySQL 5.7.29

## Getting Started

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Configure MySQL Credentials

From within ./db/index.js, configure credentials :

```sh
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: 'product_component',
});
```

### Seed Database With Mock Data

```sh
npm run seed-db
```

## Run Application

### Start app in production mode

```sh
npm start
```

## Development

### Start app in development mode

```sh
npm run dev
```

## Related Projects
  > Team Members' Modules
  - https://github.com/LeggoMyLego/ReviewComponent
  - https://github.com/LeggoMyLego/GalleryComponent
  > Proxy Server for Serving All Modules
  - https://github.com/LeggoMyLego/JoeyProxyServer

## API

### Get product info
  * GET `/product/:productId`

**Path Parameters:**
  * `productId` : product id

**Data contained:**
  * Returned object contains information on an individual product. This includes the name, price, reviews as well as the URL for the image of the product itself.

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "productId": "Number",
      "productName": "String",
      "price": "Number",
      "reviewCount": "Number",
      "rating": "Number",
      "themeName": "String",
      "themeImageUrl": "String",
      "featured": "String",
      "chokingHazard": "Boolean",
      "productLimit": "Number",
      "productAvailabilityOnline": "Boolean",
    }
```

### Add product
**Note: This is not utilized within this application component but can be utilized for general database management and upkeep!**

  * POST `/product`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "productName": "String",
      "price": "Number",
      "reviewCount": "Number",
      "rating": "Number",
      "themeName": "String",
      "themeImageUrl": "String",
      "featured": "String",
      "chokingHazard": "Boolean",
      "productLimit": "Number",
      "productAvailabilityOnline": "Boolean",
    }
```


### Update product info
  * PATCH `/product/:productId`

**Path Parameters:**
  * `productId` : product id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "productName": "String",
      "price": "Number",
      "reviewCount": "Number",
      "rating": "Number",
      "themeName": "String",
      "themeImageUrl": "String",
      "featured": "String",
      "chokingHazard": "Boolean",
      "productLimit": "Number",
      "productAvailabilityOnline": "Boolean",
    }
```

### Delete product
  * DELETE `/product/:productId`

**Path Parameters:**
  * `productId` : product id

**Success Status Code:** `204`



### Get store info
  * GET `/store/:storeId`

**Path Parameters:**
  * `storeId` : store id


**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "storeId": "Number",
      "storeName": "String",
      "storeZip": "Number",
    }
```

### Get Availability info
  * GET `/products/:productId/availabilities`

**Path Parameters:**
  * `productId` : product id


**Success Status Code:** `200`

**storeId = foreign key stores(id)**

**productId = foreign key product(id)**

**Returns:** JSON

```json
  {
    "productId": "Number",
    "availabilities": [
      {
      "availabilityId": "Number",
      "storeId": "Number",
      "storeZip": "Number",
      "storeAvailability": "Boolean",
      },
      ...
    ]
  }
```

### Get Availability of product at specific zip info
  * GET `/products/:productId/availabilities/:zip`

**Path Parameters:**
  * `productId` : product id
  * `zip` : zip code


**Success Status Code:** `200`

**storeId = foreign key stores(id)**

**productId = foreign key product(id)**

**Returns:** JSON

```json
    {
      "availabilityId": "Number",
      "productId": "Number",
      "storeId": "Number",
      "storeZip": "Number",
      "storeAvailability": "Boolean",
    }
```
