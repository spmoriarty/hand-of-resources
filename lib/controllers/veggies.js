const { Router } = require('express');
const Veggie = require('../models/Veggie');

module.exports = Router() 
  .get('/', async (req, res, next) => {
    try {
      const data = await Veggie.getAll();
      res.json(data);
    } catch(e) {
      next(e);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const matchingVeggie = await Veggie.getById(req.params.id);
      if (!matchingVeggie) {
        next();
      }
      res.json(matchingVeggie);
    } catch(e) {
      next(e);
    }
  })
  
  .post('/', async (req, res, next) => {
    try {
      const newVeg = await Veggie.insert(req.body);
      res.json(newVeg);
    } catch(e) {
      next(e);
    }
  });
