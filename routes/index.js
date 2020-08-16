const express = require('express');
const router = express.Router();

// @desc    Profile
// @route   GET /profile
router.get('/profile', (req, res) => {
  req.isAuthenticated()
    ? res.send(req.user)
    : res
        .status(403)
        .send({ message: 'You must be logged in to perform this action.' });
});

module.exports = router;
