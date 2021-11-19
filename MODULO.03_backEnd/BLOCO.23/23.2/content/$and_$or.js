// AND
db.collections.find(
  { $and: [{ ano: { $gt: 2000 } }, { 'avaliacao.bom': { $gte: 8 } }] }
);
// and implicito nesse caso, igual a:
db.collections.find(
  { ano: { $gt: 2000 }, 'avaliacao.bom': { $gte: 8 } }
);

// =======================
// OR - array de objetos com condições
db.collections.find(
  { $or: [{ ano: { $gt: 2000 } }, { 'avaliacao.bom': { $gte: 8 } }] }
);

// =================
// AND & OR
db.collections.find(
  { $and: [{ $or: [{ ano: 2000 }, { 'avaliacao.bom': 8 }] }, { 'avaliacao.ruim': { $lt: 5 } }] }
);
