db.articles.aggregate([
  { 
      $match : {
        author : "dave",
    },
  },
]);

db.articles.aggregate([
  {
    $match: {
      or: [
        { score: { $gt: 70, $lt: 90 } },
        { views: { $gte: 1000 } }
      ]
    }
  }
]);
