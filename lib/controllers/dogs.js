const { Router } = require('express');
const Dog = require('../models/Dog');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingDog = await Dog.getById(id);
    res.json(matchingDog);
  })

  .get('/', async (req, res) => {
    const dataDogs = await Dog.getAll();
    res.json(dataDogs);
  });
