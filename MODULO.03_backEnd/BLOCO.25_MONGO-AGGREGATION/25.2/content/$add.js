// Com a expressão $add , é possível somar valores numéricos ou datas. Se um dos argumentos for do tipo date , o outro argumento será tratado como milissegundos e adicionado à data.

// Utilizando a expressão $add no estágio $project , você pode criar um novo campo com o valor total somando os campos price e fee :
db.sales.aggregate([
  {
    $project: {
      item: 1,
      total: {
        $add: ["$price", "$fee"]
      },
    },
  },
]);
// RESULTADO:
[
  {
    _id: 1,
    item: "abc",
    total: 12
  },
  {
    "_id": 2,
    "item": "jkl",
    "total": 21
  },
  {
    "_id": 3,
    "item": "xyz",
    "total": 5
  }
]


// CHEATSHEET ========
// db.collection.aggregate([
//   {
//     $project: {
//       <campo>: {
//         $add: [ <expressão1>, <expressão2>, ... ] 
//       },
//     },
//   },
// ]);
