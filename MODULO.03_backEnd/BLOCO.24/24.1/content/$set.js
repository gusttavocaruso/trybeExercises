// docs primeiro nível
db.collections.updateOne(
  { _id: 100 },
  {
    $set: { quantity: 500 }
  },
);

// docs segundo nível
db.collections.updateOne(
  { _id: 100 },
  {
    $set: { "details.model": "AAAA" },
  },
);

// OU
db.collections.updateOne(
  { _id: 100 },
  {
    $set: {
      details: { model: "AAAA", make: "BBBB" }
    },
  },
);
//  dessa forma, atualiza todo o parametro details.
//  para manter o restante e atualizar apenas o parametro indicado, utilizar dot-notation;

db.collections.updateOne(
  { _id: 100 },
  {
    $set: {
      "tag.0": "raing-gear",
      "tag.1": "glove",
    },
  },
);
// é possível acessar o indice de um array e atualiza-lo, ou cria-lo caso não exista, utilizando a dot-notation e o .Numero do indice array