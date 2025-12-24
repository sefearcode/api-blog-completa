module.exports = (data, query) => {
  let result = [...data];

  if (query.q) {
    const q = query.q.toLowerCase();
    result = result.filter(item =>
      JSON.stringify(item).toLowerCase().includes(q)
    );
  }

  if (query.categoria) {
    result = result.filter(p => p.categorias.includes(query.categoria));
  }

  if (query.sort === 'likes') {
    result.sort((a, b) => b.likes - a.likes);
  }

  return result;
};
