// $gt === >

db.filmes.find({ ano: { $gt: 2000 } });

// $lte === >=
db.filmes.find({ ano: { $gte: 2000 } });
