db.samples.aggregate([
  {
    $project: {
      value: 1,
      floorValue: { $floor: "$value" } //arredonda a chave 'value' para BAIXO e seta valor em uma nova chave 'floorValue'
    }
  }
]);


// CHEATSHEET ======
// db.collection.aggregate([
//   {
//     $project: {
//       value: 1,
//       roundedNumber: {
//         $floor: <numero>,
//       },
//     },
//   },
// ]);
