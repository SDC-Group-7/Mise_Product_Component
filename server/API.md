## SDC - Alex Mody - Server API

### Get product info
  * GET `/product/:id`

**Path Parameters:**
  * `id` : product id

**Data contained:**
  * Returned object contains information on an individual product. This includes the name, price, reviews as well as the URL for the image of the product itself.

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
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


### Update restaurant info
  * PATCH `/product/:id`

**Path Parameters:**
  * `id` product id

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
  * DELETE `/product/:id`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `204`



### Get store info
  * GET `/store/:id`

**Path Parameters:**
  * `id` : store id


**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "storeName": "String",
      "storeAddress": "String",
      "storeZip": "Number",
      "productId": "Number",
    }
```

### Get Availability info
  * GET `/availability/:id`

**Path Parameters:**
  * `id` : product id


**Success Status Code:** `200`

**storeId = foreign key stores(id)**

**productId = foreign key product(id)**

**Returns:** JSON

```json
  [
    {
      "id": "Number",
      "productId": "Number",
      "storeId": "Number",
      "storeZip": "Number",
      "storeAvailability": "Boolean",
    },
    {
      "id": "Number",
      "productId": "Number",
      "storeId": "Number",
      "storeZip": "Number",
      "storeAvailability": "Boolean",
    },
  ]
```

### Get Availability of product at specific zip info
  * GET `/products/:id/availability/:zip`

**Path Parameters:**
  * `id` : product id
  * `zip`: zip code


**Success Status Code:** `200`

**storeId = foreign key stores(id)**

**productId = foreign key product(id)**

**Returns:** JSON

```json
    {
      "id": "Number",
      "productId": "Number",
      "storeId": "Number",
      "storeZip": "Number",
      "storeAvailability": "Boolean",
    }
```
