// chama tudo do inventory
db.inventory.find();

// filtrando itens com status "D"
db.inventory.find({ status: "D" });

// Projections
db.inventory.find({ status: "A" }, { item: 1, status: 1 });
