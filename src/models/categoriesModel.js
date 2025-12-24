const { v4: uuid } = require('uuid');

const categories = [
  { id: uuid(), nombre: 'Programación' },
  { id: uuid(), nombre: 'Tecnología' }
];

module.exports = {
  categories,
  create(nombre) {
    const category = { id: uuid(), nombre };
    categories.push(category);
    return category;
  }
};
