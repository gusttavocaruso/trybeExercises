
db.sales.aggregate([
  {
    $project: {
      date: 1,
      item: 1,
      total: {
        $multiply: ["$price", "$quantity"]
      }
    }
  }
]);


//CHEATSHEET =====
// db.collection.aggregate([
//   {
//     $project: {
//       <campo>: {
//         $multiply: [
//            <expressão1>,
//            <expressão2>,
//            ... 
//          ]
//       },
//     },
//   },
// ]);
