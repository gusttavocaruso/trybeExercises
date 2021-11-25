// project === projeção
db.books.aggregate([
  {
    $project : {
      _id: 0,
      title : 1, // exibe apenas 'title'
    },
  },
]);

db.books.aggregate([
  {
    $project : {
      title : 0, // exibe todos, menos 'title'
    },
  },
]);

db.books.aggregate([
  {
    $project : {
      "author.first": 0, // pode ser usado também em sub-docs
      copies: 0
    }
  }
]);

// Podemos usar uma string iniciada com o caractere $ para indicar que queremos projetar um campo, assim: "$nomeDoCampo".
// A operação a seguir adiciona os novos campos isbn , lastname e copiesSold :
db.books.aggregate([
  {
    $project: {
      title: 1,
      lastName: "$author.last",
      copiesSold: "$copies",
      // isbn: {
      //   prefix: { $substr: ["$isbn", 0, 3] },
      //   group: { $substr: ["$isbn", 3, 2] },
      //   publisher: { $substr: ["$isbn", 5, 4] },
      //   title: { $substr: ["$isbn", 9, 3] },
      //   checkDigit: { $substr: ["$isbn", 12, 1] }
      // },
    },
  },
]);
