const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: "localhost",
  port: 5432,
  database: "sdctest"
});

// pool.connect()
//   .then(() => console.log("Connected to Postgres"))
//   .catch(e => console.log(e))
//   .finally(() => pool.end());


module.exports = pool;
