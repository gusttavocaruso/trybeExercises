db.collection.updateOne(
  { _id: 100 },
  {
    $rename: {
      "sku": "código" // nome atual do atributo: novo nome para o atributo
    }
  },
);
