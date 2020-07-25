require('dotenv').config();

const express = require('express');

const app = express();

// Environment Varibles
let port = process.env.PORT || 8080;

// Simple '/' Route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Server
app.listen(port, () => {
  console.log(`Server is listening on localhost:${port}`);
});
