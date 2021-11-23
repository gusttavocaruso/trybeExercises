db.collection.find(
  {
    $expr: {
      $lt: ["array1", "array2"]
    }
  }
);
// compara dois arrays.
// a operação executará o primeiro pelo segundo.
