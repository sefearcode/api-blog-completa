const express = require('express');
const auth = require('../middleware/auth');
const roles = require('../middleware/roles');
const { categories, create } = require('../models/categoriesModel');

const router = express.Router();

router.get('/categories', (req, res) => {
  res.json(categories);
});

router.post('/categories', auth, roles('admin'), (req, res) => {
  const category = create(req.body.nombre);
  res.status(201).json(category);
});

module.exports = router;
