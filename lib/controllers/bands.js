const { Router } = require('express');
const Band = require('../models/Band');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await Band.getAll();
      res.json(data);
    } catch(e) {
      next(e);
    }    
  })

  .get('/:id', async (req, res, next) => {
    try {
      const matchingBand = await Band.getById(req.params.id);
      if (!matchingBand) {
        next();
      }
      res.json(matchingBand);
    } catch(e) {
      next(e);
    }
  });
