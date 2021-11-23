db.collection.updateOne(
  { _id: 1 },
  {
    $push: {
      numbers: 50 // add o item '50' no array 'numbers'
    }
  }
);

db.collection.updateOne(
  { _id: 1 },
  {
    $push: {
      projetos: {
        nome: "StarWars",
        tecnologia: "React",
        horas: 12
      }
    }
  }
);

// $push + $each ===========
db.collection.updateOne(
  { _id: 1 },
  {
    $push: {
      nomeArray: { $each: [1, 2, 3, 4] }
    }
  }
);

db.collection.updateOne(
  { _id: 1 },
  {
    $push: {
      projetos: {
        $each: [
          {
            nome: "TribeWallet",
            tecnologia: "Redux",
            horas: 8
          },
          {
            nome: "Trivia",
            tecnologia: "React",
            horas: 10
          },
          {
            nome: "RecipeApp",
            tecnologia: "React",
            horas: 22
          }
        ]
      }
    }
  }
);

// $push + $each + $sort + $slice ==========
db.collection.updateOne(
  { _id: 2 },
  {
    $push: {
      quizzes: {
        $each: [
          { wk: 5, score: 8 },
          { wk: 6, score: 9 },
          { wk: 7, score: 6 }
        ],
        $sort: { score: -1 }, // organizar de forma decrescente
        $slice: 3 // cortar apenas os 3 primeiros
      }
    }
  }
);
