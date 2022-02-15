db.collection.updateMany(
  { name: "Ada" }, // filtro
  {
    $set: { // valores pra setar
      school: "Trybe Beyond",
      bestScore: 99999,
      active: false,
    },
  },
  { upsert: true }, // 3º param que cria oq não existe, atributos e docs.
);
