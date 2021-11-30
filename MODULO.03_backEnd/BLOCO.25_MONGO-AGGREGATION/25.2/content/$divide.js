db.planning.aggregate([
  {
    $project: {
      name: 1,
      workdays: {
        $divide: ["$hours", 8]
      }
    }
  }
]);


//CHEATSHEET ======
// db.collection.aggregate([
//   {
//     $project: {
//       <campo>: {
//         $divide: [ <expressão1>, <expressão2> ]
//       },
//     },
//   },
// ]);
