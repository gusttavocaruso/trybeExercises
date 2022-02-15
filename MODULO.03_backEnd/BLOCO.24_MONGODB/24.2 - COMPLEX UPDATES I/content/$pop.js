db.collection.updateOne(
  {},
  {
    $pop: {
      array: -1 // remover o 1ºelemento de um array
    }
  }
);

db.collection.updateOne(
  {},
  {
    $pop: {
      array: 1 // remover o último elemento de um array
    }
  }
);
