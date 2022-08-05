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
// NEW REST ROUTE HERE
  });

//   .get()
