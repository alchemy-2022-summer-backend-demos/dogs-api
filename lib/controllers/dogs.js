const { Router } = require('express');
const { dogs } = require('../../data/dogs');

module.exports = Router()
  .get('/dogs/:id', (req, res) => {
    const id = req.params.id;
    const matchingDog = dogs.find((dog) => dog.id === id);
    res.json(matchingDog);
  })

  .get('/dogs', (req, res) => {
    res.json(dogs);
  });
