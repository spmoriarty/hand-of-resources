const { Router } = require('express');

const King = require('../models/King');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await King.getAll();
      res.json(data);
    } catch(e) {
      next(e);
    }
    
  })
  
  .get('/:id', async (req, res, next) => {
    try {
      const matchingKing = await King.getById(req.params.id);
      if (!matchingKing) {
        next();
      }
      res.json(matchingKing);
    } catch(e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const newKing = await King.insert(req.body);
      res.json(newKing);
    } 
    catch(e) {
      next(e);
    }
  })
  
  .put('/:id', async (req, res, next) => {
    try {
      const data = await King.upDateKing(req.params.id, req.body);
      res.json(data);
    } catch(e) {
      next(e);
    }
  });
  
  
  
