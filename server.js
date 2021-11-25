//jshint esversion:6

const express = require('express');
const mongoose = require('mongoose');
// const ejs = require('ejs');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => res.send('API Running'));

app.listen(PORT, function () {
  console.log('Server is active on port 3000');
});
