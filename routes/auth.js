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
  passport.authenticate('google', { successRedirect: '/profile', failureRedirect: '/' }),
);

// @desc    Logout User
// @route   GET /auth/logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
module.exports = router;
