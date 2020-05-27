
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
  'Elysium Orbital Platform 3',
  'Elysium Orbital Platform 4',
  'Elysium Orbital Platform 5',
  'Elysium Orbital Platform 6',
  'Elysium Orbital Defense Core',
  'Helghan Mining Facility',
  'New Helghan A.I. Council Core 02',
  'New Helghan A.I. Council Core 03',
  'New Helghan A.I. Council Core 04',
  '21st Century Museum',
];


const namesTwo = [
  'Eco-Friendly Polymer',
  'Regular ABS Polymer',
  'Premium Reinforced ABS Polymer',
  'Recycled ABS Polymers',
];

const availableFlag = [
  0, 1,
];

module.exports = {
  mockThemes: themes,
  mockFeatured: featured,
  mockNames: names,
  mockNamesTwo: namesTwo,
  mockBool: availableFlag,
};
