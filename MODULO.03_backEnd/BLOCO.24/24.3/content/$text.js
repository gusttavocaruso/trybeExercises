db.collection.createIndex(
  { subject: "text" }
);

db.collection.find(
  { $text: { $search: "coffee" } }
);

// para buscar + de uma palavra
db.collection.find(
  { $text: { $search: "coffee bake cake" } }
);

// para buscar uma frase
db.collection.find(
  { $text: { $search: "\"coffee shop\"" } }
);

// para buscar por lingua
db.collection.createIndex(
  { letra: "text" },
  { default_language: "portuguese" }
);

db.collection.find(
  { $text: { $search: "tomando um café" } }
);
// consegue encontrar mesmo se for outro tempo verbal