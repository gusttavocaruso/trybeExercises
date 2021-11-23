db.collection.updateOne(
  { _id: 100 },
  {
    $currentDate: {
      "updated.data": true
    },
  },
);
// código acim acriará no DB um chave "updated" que dentro tem uma chave "data" e que dentro terá uma chave "$date" com o timestamp atual

// um valor booleano true para atribuir o valor da data corrente ao campo utilizando o tipo Date;
// OU
// um documento que especifica o tipo do campo. Esse documento pode ser { $type: "timestamp" } ou { $type: "date" } . Esse operador é case-sensitive e aceita somente letras minúsculas: timestamp ou date .
