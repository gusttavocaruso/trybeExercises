// compara duas chaves.
// a operação executará a primeira pela segunda.
db.collection.find(
  {
    $expr: {
      $lt: ["$chave1", "$chave2"]
    }
  }
);

db.collection.find(
  {
    $expr: {
      $gt: ["$chave1", "$chave2"]
    }
  }
);

db.collection.find(
  {
    $expr: {
      $eq: ["$chave1", "$chave2"]
    }
  }
);
