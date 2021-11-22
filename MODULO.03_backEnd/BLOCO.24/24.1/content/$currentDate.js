db.collection.updateOne(
  { _id: 100 },
  {
    $currentDate: {
      "updated.data": true
    },
  },
);
// código acim acriará no DB um chave "updated" que dentro tem uma chave "data" e que dentro terá uma chave "$date" com o timestamp atual
