db.collection.updateOne(
  { _id: 100 },
  {
    $mul: {
      receitaMaxima: 500 // essa chave deve já existir e o valor será o valor atual multiplicado pelo valor passado agora
    },
  },
);
