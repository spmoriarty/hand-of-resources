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
  });
