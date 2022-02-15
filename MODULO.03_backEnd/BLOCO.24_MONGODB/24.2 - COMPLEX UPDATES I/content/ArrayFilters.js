db.collection.updateOne(
  {},
  {
    $set: {
      "projetos.$[elemento].horas": 7 // altere a chave horas para 7 ...*
    }
  },
  {
    arrayFilters: [{ "elemento.name": "Aggregation" }] // *... de todos elementos que satisfazerem a condição da chave 'name': 'Aggregation'
  }
);

db.collection.updateOne(
  {},
  {
    $set: {
      "projetos.$[elemento].tipo": "Y"
    }
  },
  {
    arrayFilters: [{ "elemento.tipo": "X" }]
  }
);
