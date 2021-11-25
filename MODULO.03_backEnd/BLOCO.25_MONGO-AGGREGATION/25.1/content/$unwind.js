// O operador $unwind "desconstrói" um campo array do documento de entrada e gera como saída um documento para cada elemento do array 

db.inventory.aggregate([
  {
    $unwind : "$sizes"
  }
]);
// onde: 'sizes' é o nome de um array que contém valores [1, 2, 3].
// O retorno dessa query será 3 documentos e cada valor de 'sizes' sendo um item do array.
