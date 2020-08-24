// Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const connectDB = require('./config/db');
const path = require('path');

// Config
dotenv.config({ path: './config/config.env' });
require('./config/passport')(passport);

// Environment Varibles
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

// Start Server
const app = express();

// Static File Declaration
app.use(express.static(path.join(__dirname, 'client/build')));

// CORS Middleware
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// Logging Middleware
app.use(morgan('dev')); // Logging

// Sessions Middleware
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  }),
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

// Production Mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendfile(path.join((__dirname = 'client/build/index.html')));
  });
};

// Server
app.listen(PORT, console.log(`Server running on port ${PORT}`));
