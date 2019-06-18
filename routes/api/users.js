const express = require('express');

const router = express.Router();

// Import our user model
const User = require('../../models/user');

// GET User list
router.get('/list', (req, res, next) => {
  // Find all matching users, which in this case is all of them
  User.find((err, users) => {
    if (err) {
    // if something is broken, send the error
      return res.send(err);
    }
    // Otherwise, send the array of users
    return res.json(users);
  });
});

module.exports = router;
