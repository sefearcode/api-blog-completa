const { create, approve } = require('../models/commentsModel');
const mailer = require('../utils/mailer');

exports.createComment = (req, res) => {
  const comment = create(req.body);
  res.status(201).json(comment);
};

exports.approveComment = (req, res) => {
  const comment = approve(req.params.id);
  if (!comment) return res.status(404).json({ error: 'No existe comentario' });

  mailer.sendApprovalEmail(comment.email, comment);
  res.json({ mensaje: 'Comentario aprobado' });
};
