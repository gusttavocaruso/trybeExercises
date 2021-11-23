db.collection.updateOne(
  {},
  {
    $addToSet: {
      array: "something" // só add ao array o elemento "something" se ele não existir previamente - NÃO ADD ELEMENTOS IGUAIS
    }
  }
);

db.collection.updateOne(
  {},
  {
    $addToSet: {
      array: {
        $each: [
          "futebol", "basquete", "volei"
        ]
      }
    }
  }
);
// add cada elemento NOVO no array. Os que já existirem não serão adicionados
