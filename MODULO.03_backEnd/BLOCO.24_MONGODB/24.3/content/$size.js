db.collection.find(
  {
    quizzes: {
      $size: 10 //verifica e retorna o doc que tiver o array passado com o tamanho exato passado para o size.
    }
  }
);
