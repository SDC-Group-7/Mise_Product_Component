
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
