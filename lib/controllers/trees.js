const { Router } = require('express');
const Tree = require('../models/Tree');

module.exports = Router() 
  .get('/', async (req, res, next) => {
    try {
      const data = await Tree.getAll();
      res.json(data);
    } catch(e) {
      next(e);
    }
  });
