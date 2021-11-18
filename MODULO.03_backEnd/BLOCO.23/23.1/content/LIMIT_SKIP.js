// limit
db.inventory.find().limit(2);

db.inventory.find({ status: "A" }).limit(2);

// skip
db.inventory.find().skip(1);

db.inventory.find({ status: "A" }).skip(1);

// limit + skip 
db.inventory.find().skip(1*2).limit(2); // 1*2 = pagina * qnt pra pular