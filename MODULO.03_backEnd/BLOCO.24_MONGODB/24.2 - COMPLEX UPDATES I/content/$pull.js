db.collection.updateOne(
  {},
  {
    $pull: {
      vegetables: "carrots" //remove do array 'vegetables' o elemento 'carrots'
    }
  }
);

db.collection.updateOne(
  { _id: 1 },
  {
    $pull: {
      projetos: { tecnologia: "React" } // vai remover todos os subdocs do doc projetos em que a chave tecnologia tenha o nome 'React'
    }
  }
);

db.collection.updateOne(
  {},
  {
    $pull: {
      horas: { $lt: 4 } // fará o pull apenas em docs que a chave horas passar no 'filtro-do-pull'
    }
  }
);
