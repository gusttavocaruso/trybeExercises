db.orders.aggregate([
  {
    $lookup: {
      from: "warehouses",
      let: { order_item: "$item", order_qty: "$ordered" },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: [ "$stock_item",  "$$order_item" ] },
                { $gte: [ "$instock", "$$order_qty" ] },
              ],
            },
          },
        },
        { $project: { stock_item: 0, _id: 0 } },
      ],
      as: "stockdata"
    },
  },
]);


// CHEATSHEET =======
// db.collection.aggregate([
//   {
//    $lookup:
//      {
//        from: <coleção para unir>,
//        let: { <var_1>: <expressão>, …, <var_n>: <expressão> },
//        pipeline: [ <pipeline a ser executada na coleção unida> ],
//        as: <campo do array de saída>
//      }
//   }
// ]);
