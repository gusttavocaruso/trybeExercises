db.scores.aggregate([
  {
    $addFields: {
      totalHomework: { $sum: "$homework" },
      totalQuiz: { $sum: "$quiz" }
    }
  },
  {
    $addFields: {
      totalScore: {
        $add: [
          "$totalHomework",
          "$totalQuiz",
          "$extraCredit"
        ]
      }
    }
  }
]);

// O primeiro estágio adiciona o campo totalHomework somando os valores contidos no array homework . Também adiciona outro campo chamado totalQuiz somando os valores do array quiz .
// O segundo estágio adiciona o campo totalScore , que, por sua vez, soma os valores dos campos totalHomework , totalQuiz e extraCredit .
// Note que o resultado mantém os campos originais do documento de entrada, juntamente com os três novos campos adicionados:
[
  {
    "_id": 1,
    "student": "Maya",
    "homework": [ 10, 5, 10 ],
    "quiz": [ 10, 8 ],
    "extraCredit": 0,
    "totalHomework": 25,
    "totalQuiz": 18,
    "totalScore": 43
  },
  {
    "_id": 2,
    "student": "Ryan",
    "homework": [ 5, 6, 5 ],
    "quiz": [ 8, 8 ],
    "extraCredit": 8,
    "totalHomework": 16,
    "totalQuiz": 16,
    "totalScore": 40
  }
]


//CHEATSHEET ======
// db.collection.aggregate([
//   {
//     $addFields: {
//       <novoCampo1>: <valor> ,
//       <novoCampo2>: <valor> ,
//       ...
//     },
//   },
// ]);
