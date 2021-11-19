// $lt === <

db.filmes.find({ ano: { $lt: 2000 } });

// $lte === <=
db.filmes.find({ ano: { $lte: 2000 } });
