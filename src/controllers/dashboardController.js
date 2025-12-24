const { posts } = require('../models/postsModel');
const { comments } = require('../models/commentsModel');
const { categories } = require('../models/categoriesModel');

exports.stats = (req, res) => {
  res.json({
    posts: posts.length,
    comentarios: comments.length,
    pendientes: comments.filter(c => !c.aprobado).length,
    categorias: categories.length,
    likes: posts.reduce((a, p) => a + p.likes, 0)
  });
};
