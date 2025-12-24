module.exports = {
  sendApprovalEmail(email, comment) {
    console.log(`📧 Email enviado a ${email}`);
    console.log(`Comentario aprobado: "${comment.contenido}"`);
  }
};
