const bcrypt = require('bcryptjs');

const users = [
  {
    id: 1,
    username: 'admin',
    password: bcrypt.hashSync('admin123', 10),
    role: 'admin',
    email: 'admin@blog.com'
  },
  {
    id: 2,
    username: 'autor',
    password: bcrypt.hashSync('autor123', 10),
    role: 'autor',
    email: 'autor@blog.com'
  }
];

module.exports = { users };
