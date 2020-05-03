import supertest from 'supertest';

import server from '../../server/index.js';
import db from '../../db/index.js';

const request = supertest(server);

describe('API tests', () => {
  afterAll(async (done) => {
    db.connection.end();
    done();
  });

  it('should get a product from the database', async (done) => {
    const product = {
      id: 1,
      product_name: 'Generic Fresh Gloves',
      price: 47.99,
      review_count: 58,
      rating: 1.3,
      theme_name: 'Classic',
      theme_image_url: 'https://legofec.s3-us-west-1.amazonaws.com/themes/classic.png',
      featured: 'Exclusives',
      choking_hazard: 1,
      product_limit: 6,
      product_image_url: 'https://legofec.s3-us-west-1.amazonaws.com/products/classic.png',
    };
    const res = await request.get(`/product/${product.id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body[0]).toEqual(product);
    done();
  });

  it(`should get a list of stores with a product's availability from the database`, async (done) => {
    const stores = [
      {
          "id": 1,
          "store_name": "LEGO Store University Town Center",
          "store_address": "4545 La Jolla Village Dr University Town Center Space H23, San Diego, CA 92122",
          "product_id": 1,
          "product_availability": 1
      },
      {
          "id": 101,
          "store_name": "LEGO Store Ontario Mills",
          "store_address": "1 Mills Cir #631, Ontario, CA 91764",
          "product_id": 1,
          "product_availability": 0
      },
      {
          "id": 201,
          "store_name": "LEGO Store Fashion Valley",
          "store_address": "Fashion Valley, 7007 Friars Rd Space 965A, San Diego, CA 92108",
          "product_id": 1,
          "product_availability": 0
      },
      {
          "id": 301,
          "store_name": "LEGOLAND California Hotel LEGO Gift Shop",
          "store_address": "5885 The Crossings Dr, Carlsbad, CA 92008",
          "product_id": 1,
          "product_availability": 1
      },
      {
          "id": 401,
          "store_name": "LEGO Store NorthPark Center",
          "store_address": "8687 N Central Expy #770, Dallas, TX 75225",
          "product_id": 1,
          "product_availability": 0
      },
      {
          "id": 501,
          "store_name": "LEGO Store Arrowhead Towne Ctr",
          "store_address": "Arrowhead Towne Ctr, 7700 W Arrowhead Towne Center Space 1109, Glendale, AZ 85308",
          "product_id": 1,
          "product_availability": 1
      },
      {
          "id": 601,
          "store_name": "LEGO Store Disneyland Resort",
          "store_address": "Downtown Disney District, 1585 S, Disneyland Dr, Anaheim, CA 92802",
          "product_id": 1,
          "product_availability": 1
      },
      {
          "id": 701,
          "store_name": "LEGO Store South Coast Plaza",
          "store_address": "3333 Bristol Street South Coast Plaza Space 1042, Costa Mesa, CA 92626",
          "product_id": 1,
          "product_availability": 1
      },
      {
          "id": 801,
          "store_name": "LEGO Store Glendale Galleria",
          "store_address": "2130 Glendale Galleria, Glendale, CA 91210",
          "product_id": 1,
          "product_availability": 1
      },
      {
          "id": 901,
          "store_name": "LEGO Store Disney Springs",
          "store_address": "1672 E Buena Vista Dr Marketplace, Lake Buena Vista, FL 32830",
          "product_id": 1,
          "product_availability": 1
      },
      {
          "id": 1001,
          "store_name": "LEGO Store Stoneridge",
          "store_address": "1444 Stoneridge Mall Space D117A, Pleasanton, CA 94588",
          "product_id": 1,
          "product_availability": 1
      },
      {
          "id": 1101,
          "store_name": "LEGO Store Hillsdale Shopping Center",
          "store_address": "341 E Sailer Dr, San Mateo, CA 94403",
          "product_id": 1,
          "product_availability": 1
      },
      {
          "id": 1201,
          "store_name": "LEGO Store Flatiron District",
          "store_address": "200 5th Ave, New York, NY 10010",
          "product_id": 1,
          "product_availability": 1
      },
      {
          "id": 1301,
          "store_name": "LEGO Store Queens Ctr",
          "store_address": "90-15 Queens Blvd Suite 1076, Flushing, NY 11373",
          "product_id": 1,
          "product_availability": 0
      },
      {
          "id": 1401,
          "store_name": "LEGO Store Mission Viejo",
          "store_address": "555 The, Shops At Mission Viejo Space 428B, Mission Viejo, CA 92691",
          "product_id": 1,
          "product_availability": 1
      },
      {
          "id": 1501,
          "store_name": "LEGO Store San Francisco",
          "store_address": "865 Market St Space C41, San Francisco, CA 94103",
          "product_id": 1,
          "product_availability": 1
      },
      {
          "id": 1601,
          "store_name": "LEGO Store Westfield Topanga",
          "store_address": "6600 Topanga Canyon Blvd, Canoga Park, CA 91303",
          "product_id": 1,
          "product_availability": 1
      },
      {
          "id": 1701,
          "store_name": "LEGO Store Penn Square",
          "store_address": "Penn Square Mall, 1901 Northwest Expy Space 1058B, Oklahoma City, OK 73118",
          "product_id": 1,
          "product_availability": 0
      },
      {
          "id": 1801,
          "store_name": "LEGO Store Concord Mills",
          "store_address": "8111 Concord Mills Blvd, Mills #206, Concord, NC 28027",
          "product_id": 1,
          "product_availability": 0
      },
      {
          "id": 1901,
          "store_name": "LEGO Store Annapolis",
          "store_address": "1260 Annapolis Mall Rd, Annapolis, MD 21401",
          "product_id": 1,
          "product_availability": 0
      }
    ];
    const store = {
      "id": 1,
      "store_name": "LEGO Store University Town Center",
      "store_address": "4545 La Jolla Village Dr University Town Center Space H23, San Diego, CA 92122",
      "product_id": 1,
      "product_availability": 1
  };
    const res = await request.get(`/product/${store.product_id}/find-store`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(stores);
    expect(res.body.length).toEqual(20);
    expect(res.body.filter(store => store.product_id === 1).length).toEqual(20);
    done();
  });

  it('should respond with a 404 to a product request if product is not found', async (done) => {
    const res = await request.get('/product/null');
    expect(res.statusCode).toEqual(404);
    done();
  });

  it('should respond with a 404 to a find-store request if product is not found', async (done) => {
    const res = await request.get('/product/null/find-store');
    expect(res.statusCode).toEqual(404);
    done();
  });

});
