// retorna somente os matchs
db.collections.find(
  { ano: { $in: [1992, 1994, 1996] } }
);

// retornar somente os que NAO fazem matchs
db.collections.find(
  { ano: { $nin: [1998, 2000] } }
);
