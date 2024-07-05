const express = require('express');
const router = express.Router();

router.get('/coffees', (req, res) => {
  res.send('List of coffees');
});

module.exports = router;
