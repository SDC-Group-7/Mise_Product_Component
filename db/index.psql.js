const { Client } = require('pg');

const client = new Client({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: "localhost",
  port: 5432,
  database: "sdctest"
});

client.connect()
  .then(() => console.log("Connected to Postgres"))
  .catch(e => console.log(e))
  .finally(() => client.end());
