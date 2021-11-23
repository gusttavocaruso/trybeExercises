db.collection.find(
  {
    name: {
      $regex: /^al.*$/i
    }
  }
);
// ^ indica inicio de palavra
// .*$ indica o resto
// /i indica case sensitive
