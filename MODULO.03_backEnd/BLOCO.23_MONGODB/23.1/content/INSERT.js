// show dbs;
// show collections;

// =========================
// cria se não existir e chama
// db chamado class e
// collection chamada inventory
use('class');
db.inventory.insertOne({
  item: "journal",
  qnty: 25,
  size: { h: 14, w: 21 },
  status: "A",
});

db.inventory.insertMany([
  { item: "paper", qnty: 100, status: "D"},
  {item: "planner", qnty: 75, status: "D"},
]);

// ===========================
use('products');
db.sample.insertOne({
  "productName": "Caixa",
  "price": 20,
});

db.sample.insertMany([
  { "productName": "Lapis", "stock": 10, "price": 20,"status":"A"},
  { "productName": "Tesoura", "price": 5, "status": "B" },
  { "productName": "Borracha", "price": 15, "status": "A" },
]);
