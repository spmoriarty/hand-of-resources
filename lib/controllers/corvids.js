const { Router } = require('express');
const Corvid = require('../models/Corvid');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await Corvid.getAll();
      res.json(data);
    } catch(e) {
      next(e);
    }
  });
