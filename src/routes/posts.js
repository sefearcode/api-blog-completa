const express = require('express');
const auth = require('../middleware/auth');
const { posts, create, like } = require('../models/postsModel');
const search = require('../utils/search');

const router = express.Router();

router.get('/posts', (req, res) => {
  res.json(search(posts, req.query));
});

router.post('/posts', auth, (req, res) => {
  const post = create(req.body, req.user);
  res.status(201).json(post);
});

router.post('/posts/:id/like', auth, (req, res) => {
  const post = like(req.params.id);
  if (!post) return res.status(404).json({ error: 'Post no encontrado' });
  res.json(post);
});

module.exports = router;
