db.collection.find(
  {
    $expr: {
      $lt: ["$chave1", "$chave2"]
    }
  }
);
// compara duas chaves.
// a operação executará a primeira pela segunda.
