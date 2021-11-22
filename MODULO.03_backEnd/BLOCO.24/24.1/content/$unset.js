db.collection.updateOne(
  { _id: 100 },
  {
    $unset: {
      receitaMaxima: "" //remove o campo receitaMaxima do DB
    }
  },
);
