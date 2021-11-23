db.collection.find(
  {
    quizzes: {
      $elemMatch: {
        wk: { $gte: 5, lte: 7 }
      }
    }
  }
);
