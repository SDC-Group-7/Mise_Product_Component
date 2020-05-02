/* eslint-disable no-console */
const express = require('express');
const { connection } = require('../db/index.js');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.path}`);
  next();
});

app.get('/product/:id', (req, res) => {
  connection.query('SELECT * FROM products WHERE id=1', (err, results) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(results);
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
