const { Router } = require('express');
const res = require('express/lib/response');
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
  })
  
  .post('/', async (req, res, next) => {
    try {
      const newBand = await Band.insert(req.body);
      res.json(newBand);
    } 
    catch(e) {
      next(e);
    }
  });
