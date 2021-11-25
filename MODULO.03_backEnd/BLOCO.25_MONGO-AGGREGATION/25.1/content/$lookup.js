// Imagine que você queria retornar em uma única query os documentos correspondentes de duas coleções (orders e inventory). A primeira coisa é encontrar um campo em comum entre elas. Nesse caso, seriam os campos item (coleção orders ) e sku (coleção inventory ). Quando cruzados na operação a seguir, um novo campo, chamado inventory_docs , será adicionado ao resultado final:
db.orders.aggregate([
  {
    $lookup: {
      from: "inventory",
      localField: "item",
      foreignField: "sku",
      as: "inventory_docs"
    }
  }
]);

// RETORNO DA QUERY ACIMA: ===============
[
  {
    "_id": 1,
    "item": "almonds",
    "price": 12,
    "quantity": 2,
    "inventory_docs": [
      {
        "_id": 1,
        "sku": "almonds",
        "description": "product 1",
        "instock": 120
      }
    ]
  },
  {
    "_id": 2,
    "item": "pecans",
    "price": 20,
    "quantity": 1,
    "inventory_docs": [
      {
        "_id": 4,
        "sku": "pecans",
        "description": "product 4",
        "instock": 70
      }
    ]
  },
  {
    "_id": 3,
    "inventory_docs": [
      {
        "_id": 5,
        "sku": null,
        "description": "Incomplete"
      },
      {
        "_id": 6
      }
    ]
  }
]
// ===========================
