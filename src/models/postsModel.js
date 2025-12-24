const { v4: uuid } = require('uuid');

const posts = [];

module.exports = {
  posts,
  create(data, user) {
    const post = {
      id: uuid(),
      titulo: data.titulo,
      contenido: data.contenido,
      categorias: data.categorias || [],
      autor: user.username,
      likes: 0,
      createdAt: new Date()
    };
    posts.push(post);
    return post;
  },
  like(id) {
    const post = posts.find(p => p.id === id);
    if (!post) return null;
    post.likes++;
    return post;
  }
};
