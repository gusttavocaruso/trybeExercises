db.collection.updateOne(
  { _id: 100 },
  {
    $max: {
      qnt: 200 // se o valor passado for menor que o valor que está no campo, o valor não altera. Apenas se for MAIOR
    },
  },
);