db.collection.updateOne(
  { _id: 100 },
  {
    $inc: {
      itemEstoque: 2 // add + 2 no estoque
    },
  },
);

db.collection.updateOne(
  { _id: 100 },
  {
    $inc: {
      itemEstoque: (-8) // remove 8 no estoque
    },
  },
);
