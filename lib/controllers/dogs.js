const { Router } = require('express');
const { dogs } = require('../../data/dogs');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const matchingDog = dogs.find((dog) => dog.id === id);
    res.json(matchingDog);
  })

  .get('/', (req, res) => {
    res.json(dogs);
  });
