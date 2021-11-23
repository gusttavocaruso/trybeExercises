db.collection.find(
  {
    name: {
      $regex: /^al.*$/i
    }
  }
);
// ^ indica inicio de palavra
// .*$ indica o resto
// /i indica case sensitive


// A query abaixo seleciona todos os documentos em que o campo sku "termine" com "789" :
db.products.find(
  { sku: { $regex: /789$/ } }
);

// O exemplo abaixo, que retorna palavras "começando" com ABC:
db.products.find(
  { sku: { $regex: /^ABC/i } }
);
