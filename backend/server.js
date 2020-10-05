// CommonJs modules
// const express = require('express');
// const dotenv = require('dotenv');
// const products = require('./data/products');

// ES6 modules --> Add "type": "module" to package.json
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

import colors from 'colors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB();
const app = express();

// app.get('/', (req, res) => {
//   res.send('API is running...');
//   next();
// });

app.use('/api/products', productRoutes);

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
