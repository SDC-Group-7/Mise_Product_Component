/* eslint-disable no-console */
const express = require('express');
const { getProduct, getStores } = require('./controller.js');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.path}`);
  next();
});

app.get('/product/:id', (req, res) => {
  getProduct(req.params.id, (err, results) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(results);
  });
});


app.get('/product/:id/find-store', (req, res) => {
  getStores(req.params.id, (err, results) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(results);
  });
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
