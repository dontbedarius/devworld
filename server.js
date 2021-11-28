//jshint esversion:6

const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect Database
connectDB();

//Init Middleware(body-parser)
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// All Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/post', require('./routes/api/post'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log('Server is active on port 3000');
});
