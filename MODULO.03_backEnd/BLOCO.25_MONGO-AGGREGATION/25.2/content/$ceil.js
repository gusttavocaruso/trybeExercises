db.samples.aggregate([
  {
    $project: {
      value: 1,
      ceilingValue: { $ceil: "$value" } //arredonda a chave 'value' para CIMA e seta esses valores em uma chave nova 'ceilingValue'
    }
  }
]);


// CHEATSHEET ======
// db.collection.aggregate([
//   {
//     $project: {
//       roundedNumber: {
//         $ceil: <numero>,
//       },
//     },
//   },
// ]);
