const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
//Here shop => shop.pug 
  res.render('shop', {prods: products, docTitle: 'Master Product', pay: 'Rs. 3200',});
});

module.exports = router;
