const { Router } = require('express');
const Corvid = require('../models/Corvid');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await Corvid.getAll();
      res.json(data);
    } catch(e) {
      next(e);
    }})
    
  .get('/:id', async (req, res, next) => {
    try {
      const matchingBird = await Corvid.getById(req.params.id);
      if (!matchingBird) {
        next();
      }
      res.json(matchingBird);
    } catch(e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const newBird = await Corvid.insert(req.body);
      res.json(newBird);
    }
    catch(e) {
      next(e);
    }
  })
    
  .put('/:id', async (req, res, next) => {
    try {
      const data = await Corvid.updateBirdId(req.params.id, req.body);
      res.json(data);
    } catch(e) {
      next(e);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Corvid.delete(req.params.id);
      res.json(data);
    } catch(e) {
      next(e);
    }
  });





