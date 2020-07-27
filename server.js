// Server Imports
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Authentication Imports
const jwt = require('jsonwebtoken');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

// Route Imports
const authRoute = require('./routes/auth');

// DB Imports
const mongoose = require('mongoose');

// Initialize dotenv
dotenv.config();

// Environment Varibles
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;


// To do --------------------------------------------------------
// Mock DB (replace with MongoDB using Mongoose later)
// - User data from email-password
// - User data from OAuth has no password
const DATA = [
  { email: 'test@gmail.com', password: '1234' },
  { email: 'test2@gmail.com', provider: 'facebook' },
];

// Connect to DB
// mongoose.connect(
//   DB_URI,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   () => {
//     console.log('Connected to DB!');
//   },
// );

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

// // Route Middlewares
// app.use('/api/user', authRoute);

// Config
const config = { secretOrKey: 'mysecret' };


// Utility Functions
const findOrCreate = () => {};

const checkUser = () => {};

// Server
app.listen(PORT, () => {
  console.log(`Server is listening on localhost:${PORT}`);
});
