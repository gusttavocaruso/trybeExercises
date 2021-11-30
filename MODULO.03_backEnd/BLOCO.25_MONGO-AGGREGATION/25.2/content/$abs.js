// A expressão $abs retorna o valor absoluto de um número.

db.ratings.aggregate([
  {
    $project: {
      delta: {
        $abs: {
          $subtract: ["$start", "$end"]
        }
      }
    }
  }
]);


//CHEATSHEET ======
// db.collection.aggregate([
//   {
//     project: {
//       <campo>: {
//         $abs: <numero>,
//       },
//     },
//   },
// ]);
