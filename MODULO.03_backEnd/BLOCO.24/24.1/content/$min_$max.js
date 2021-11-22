// $min : altera o valor do campo atual para o valor passado pelo método se o valor passado pelo método for menor do que o valor do campo atual.
db.collection.updateOne(
  { _id: 100 },
  {
    $min: {
      qnt: 200 // se o valor passado for maior que o valor que está no campo, o valor não altera. Apenas se for MENOR
    },
  },
);

// $max : altera o valor do campo atual para o valor passado pelo método se o valor passado pelo método for maior do que o valor do campo atual.
db.collection.updateOne(
  { _id: 100 },
  {
    $max: {
      qnt: 200 // se o valor passado for menor que o valor que está no campo, o valor não altera. Apenas se for MAIOR
    },
  },
);
