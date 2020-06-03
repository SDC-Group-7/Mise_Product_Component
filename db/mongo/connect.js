const { MongoClient } = require('mongodb');

const mongoUrl = process.env.DB_URL || 'mongodb://localhost:27017';
const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

function connectToDb(dbName) {
  return new Promise((resolve, reject) => {
    console.log('Mongo URL', mongoUrl);
    client.connect((err) => {
      if (err) {
        reject(err);
      } else {
        console.log('Mongo Connection established!\n');
        resolve(client.db(dbName));
      }
    });
  });
}

module.exports = { dbClient: client, dbConnect: connectToDb('sdcMongo') };
