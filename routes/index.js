const express = require('express');
const router = express.Router();

// @desc    User
// @route   GET /user
router.get('/user', (req, res) => {
  req.isAuthenticated()
    ? res.send(req.user)
    : res
        .status(403)
        .send({ message: 'You must be logged in to perform this action.' });
});

module.exports = router;
