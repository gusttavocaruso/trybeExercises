db.sales.aggregate([
  {
    $group : { //agrupará
      _id : "$item", // pela chave 'item'
      count: { $sum: 1} // trará a chave 'count' com a soma dos valores
    },
  },
]);

db.sales.aggregate([
  {
    $group : {
      _id : null, // utiliza-se 'null' na chave '_id' para selecionar TODOS docs de uma coleção
      count: { $sum: 1}
    },
  },
]);

// Por exemplo, se você quiser manter o agrupamento anterior, mas saber apenas as vendas que possuem valores maiores do que 100 , é só adicionar mais um estágio no pipeline :
db.sales.aggregate([
  // Primeiro Estágio
  {
    $group: {
      _id : "$item", // agrupará pela chave 'item'
      totalSaleAmount: { // criará cjave 'totalSaleAmout'
        $sum: { // que será a soma de
          $multiply: ["$price", "$quantity"] // uma mult
        },
      },
    },
  },
  // Segundo Estágio
  {
    $match: { "totalSaleAmount": { $gte: 100 } }
  },
]);