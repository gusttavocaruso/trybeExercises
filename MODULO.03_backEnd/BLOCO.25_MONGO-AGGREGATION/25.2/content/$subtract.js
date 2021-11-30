db.sales.aggregate([
  {
    $project: {
      item: 1,
      dateDifference: {
        $subtract: [new Date(), "$date"]
      }
    }
  }
]);

db.sales.aggregate([
  {
    $project: {
      item: 1,
      total: {
        $subtract: [
          { $add: ["$price", "$fee"] },
          "$discount"
        ]
      }
    }
  }
]);


//CHEATSHEET ======
// db.collection.aggregate([
//   {
//     $project: {
//       <campo>: {
//         $subtract: [
//           <expression1>,
//           <expression2>
//         ]
//       },
//     },
//   },
// ]);
