const { Router } = require('express');
const { dogs } = require('../../data/dogs');

module.exports = Router().get('/dogs', (req, res) => {
  res.json(dogs);
});
