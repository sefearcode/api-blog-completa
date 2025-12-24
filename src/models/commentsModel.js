const { v4: uuid } = require('uuid');

const comments = [];

module.exports = {
  comments,
  create(data) {
    const comment = {
      id: uuid(),
      postId: data.postId,
      contenido: data.contenido,
      email: data.email,
      aprobado: false,
      likes: 0
    };
    comments.push(comment);
    return comment;
  },
  approve(id) {
    const comment = comments.find(c => c.id === id);
    if (!comment) return null;
    comment.aprobado = true;
    return comment;
  }
};
