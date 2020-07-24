require('dotenv').config();

const express = require('express');

const app = express();

// Environment Varibles
let host = process.env.HOST;
let port = process.env.PORT;

// Simple '/' Route
app.get('/', (req, res) => {
    res.send('Hello World');
})

// Server
app.listen(port, () => {
  console.log(`Server is listening on ${host}:${port}`);
});