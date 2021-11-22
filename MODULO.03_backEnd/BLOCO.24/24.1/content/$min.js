db.collection.updateOne(
  { _id: 100 },
  {
    $min: {
      qnt: 200 // se o valor passado for maior que o valor que está no campo, o valor não altera. Apenas se for MENOR
    },
  },
);
