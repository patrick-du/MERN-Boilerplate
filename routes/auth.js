const express = require('express');
const passport = require('passport');
const router = express.Router();

// @desc    Google OAuth Transaction
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// @desc    Google OAuth Callback
// @route   GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
  }),
);

// @desc    Facebook OAuth Transaction
// @route   GET /auth/facebook
router.get('/facebook', passport.authenticate('facebook'));

// @desc    Facebook OAuth Callback
// @route   GET /auth/facebook/callback
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
  }),
);

// @desc    Logout User
// @route   GET /auth/logout
router.get('/logout', (req, res) => {
  req.logout();
  res.send(200);
});

module.exports = router;
