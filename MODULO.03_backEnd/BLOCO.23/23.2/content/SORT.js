db.collections.find().sort({ ano: 1 }); // ordem crescente
db.collections.find().sort({ ano: -1 }); // ordem decrescente


// filtra e ordena
db.collections.find({ ano: { $gte: 1999 } }).sort({ ano: 1 });
