// CommonJs modules
// const express = require('express');
// const dotenv = require('dotenv');
// const products = require('./data/products');

// ES6 modules --> Add "type": "module" to package.json
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import express from 'express';
import products from './data/products.js';

dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((prod) => prod._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
