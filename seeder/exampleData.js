const stores = [
  {
    name: 'LEGO Store University Town Center',
    address: '4545 La Jolla Village Dr University Town Center Space H23, San Diego, CA 92122',
  },
  {
    name: 'LEGO Store Ontario Mills',
    address: '1 Mills Cir #631, Ontario, CA 91764',
  },
  {
    name: 'LEGO Store Fashion Valley',
    address: 'Fashion Valley, 7007 Friars Rd Space 965A, San Diego, CA 92108',
  },
  {
    name: 'LEGOLAND California Hotel LEGO Gift Shop',
    address: '5885 The Crossings Dr, Carlsbad, CA 92008',
  },
  {
    name: 'LEGO Store NorthPark Center',
    address: '8687 N Central Expy #770, Dallas, TX 75225',
  },
  {
    name: 'LEGO Store Arrowhead Towne Ctr',
    address: 'Arrowhead Towne Ctr, 7700 W Arrowhead Towne Center Space 1109, Glendale, AZ 85308',
  },
  {
    name: 'LEGO Store Disneyland Resort',
    address: 'Downtown Disney District, 1585 S, Disneyland Dr, Anaheim, CA 92802',
  },
  {
    name: 'LEGO Store South Coast Plaza',
    address: '3333 Bristol Street South Coast Plaza Space 1042, Costa Mesa, CA 92626',
  },
  {
    name: 'LEGO Store Glendale Galleria',
    address: '2130 Glendale Galleria, Glendale, CA 91210',
  },
  {
    name: 'LEGO Store Disney Springs',
    address: '1672 E Buena Vista Dr Marketplace, Lake Buena Vista, FL 32830',
  },
  {
    name: 'LEGO Store Stoneridge',
    address: '1444 Stoneridge Mall Space D117A, Pleasanton, CA 94588',
  },
  {
    name: 'LEGO Store Hillsdale Shopping Center',
    address: '341 E Sailer Dr, San Mateo, CA 94403',
  },
  {
    name: 'LEGO Store Flatiron District',
    address: '200 5th Ave, New York, NY 10010',
  },
  {
    name: 'LEGO Store Queens Ctr',
    address: '90-15 Queens Blvd Suite 1076, Flushing, NY 11373',
  },
  {
    name: 'LEGO Store Mission Viejo',
    address: '555 The, Shops At Mission Viejo Space 428B, Mission Viejo, CA 92691',
  },
  {
    name: 'LEGO Store San Francisco',
    address: '865 Market St Space C41, San Francisco, CA 94103',
  },
  {
    name: 'LEGO Store Westfield Topanga',
    address: '6600 Topanga Canyon Blvd, Canoga Park, CA 91303',
  },
  {
    name: 'LEGO Store Penn Square',
    address: 'Penn Square Mall, 1901 Northwest Expy Space 1058B, Oklahoma City, OK 73118',
  },
  {
    name: 'LEGO Store Concord Mills',
    address: '8111 Concord Mills Blvd, Mills #206, Concord, NC 28027',
  },
  {
    name: 'LEGO Store Annapolis',
    address: '1260 Annapolis Mall Rd, Annapolis, MD 21401',
  },
];

const themes = [
  {
    name: 'LEGO Marvel',
    themeURL: 'https://legofec.s3-us-west-1.amazonaws.com/themes/marvel.png',
    productURL: 'https://legofec.s3-us-west-1.amazonaws.com/products/marvel.png',
  },
  {
    name: 'Star Wars',
    themeURL: 'https://legofec.s3-us-west-1.amazonaws.com/themes/star-wars.png',
    productURL: 'https://legofec.s3-us-west-1.amazonaws.com/products/star-wars.png',
  },
  {
    name: 'Architecture',
    themeURL: 'https://legofec.s3-us-west-1.amazonaws.com/themes/architecture.png',
    productURL: 'https://legofec.s3-us-west-1.amazonaws.com/products/architecture.png',
  },
  {
    name: 'City',
    themeURL: 'https://legofec.s3-us-west-1.amazonaws.com/themes/city.png',
    productURL: 'https://legofec.s3-us-west-1.amazonaws.com/products/city.png',
  },
  {
    name: 'Classic',
    themeURL: 'https://legofec.s3-us-west-1.amazonaws.com/themes/classic.png',
    productURL: 'https://legofec.s3-us-west-1.amazonaws.com/products/classic.png',
  },
  {
    name: 'DC Super Heroes',
    themeURL: 'https://legofec.s3-us-west-1.amazonaws.com/themes/dc.png',
    productURL: 'https://legofec.s3-us-west-1.amazonaws.com/products/dc.png',
  },
  {
    name: 'Jurassic World',
    themeURL: 'https://legofec.s3-us-west-1.amazonaws.com/themes/Jurassic.png',
    productURL: 'https://legofec.s3-us-west-1.amazonaws.com/products/jurassic-world.png',
  },
  {
    name: 'Overwatch',
    themeURL: 'https://legofec.s3-us-west-1.amazonaws.com/themes/overwatch.png',
    productURL: 'https://legofec.s3-us-west-1.amazonaws.com/products/overwatch.png',
  },
  {
    name: 'NINJAGO',
    themeURL: 'https://legofec.s3-us-west-1.amazonaws.com/themes/ninjago.png',
    productURL: 'https://legofec.s3-us-west-1.amazonaws.com/products/ninjago.png',
  },
  {
    name: 'Harry Potter',
    themeURL: 'https://legofec.s3-us-west-1.amazonaws.com/themes/HarryPotter.png',
    productURL: 'https://legofec.s3-us-west-1.amazonaws.com/products/harry-potter.png',
  },
];

const featured = ['New', 'Exclusives', 'Retiring soon', 'Hard to find'];

const names = [
  'Elysium Protectorate Station',
  'New Babylon Guards Set',
  'Neo-Tokyo Financial Building',
  'Neo-Seoul Slum Palace',
  'ASEAN stealth drone',
  'Elysium shield drone',
  'EU stealth mech',
  'Imperial Artillary mech',
  'Ambrosium Headquarters',
  'Elysium Special Operations',
  'A.I. Council Hall',
  'Asset Allocation Facility',
  'Megablock 02 Limited Edition',
  'Megablock 01 Limited Edition',
  'Megablock 01 Standard Edition',
  'Mechanized Infantry Brigade',
  'Tech-Ninja Squad',
  'Bio-weapon research facility',
  'Entertainment District Hub',
  'Holographic Art Gallery',
  'Holographic Museum of Biology',
  'A.I. History Museum',
  'Exo-suit Neo-Bionicle',
  'Genji limited edition set',
  'Harlan Hub Tower',
  'Bay City City Square',
  'Tier 2 Asset Allocation Facility ',
  'Megablock 04 Limited Edition',
  'Megablock A1 Limited Edition',
  'Megablock 06 Standard Edition',
  'Megablock 06 Limited Edition',
  'Megablock 05 Limited Edition',
  'Megablock 05 Standard Edition',
  'Megablock 102 Limited Edition',
  'Megablock 102 Limited Edition',
  'Megablock 58 Standard Edition',
  'ASEAN Space Station',
  'E.U. Space Station',
  'CRM Space Station',
  'UAR Space Station',
  'LUNA Space Station',
  'New Chinese Conglomerate Space Station',
  'Chinese CCAG Space Station',
  'Oceania Space Station',
  'Elysium Orbital Platform 1',
  'Elysium Orbital Platform 2',
  'Elysium Orbital Platform 3', 'Elysium Orbital Platform 4',
  'Elysium Orbital Platform 5',
  'Elysium Orbital Platform 6',
  'Elysium Orbital Defense Core',
  'Helghan Mining Facility',
  'New Helghan A.I. Council Core 02',
  'New Helghan A.I. Council Core 03',
  'New Helghan A.I. Council Core 04',
  '21st Century Museum',
];

module.exports = {
  mockStores: stores,
  mockThemes: themes,
  mockFeatured: featured,
  mockNames: names,
};
