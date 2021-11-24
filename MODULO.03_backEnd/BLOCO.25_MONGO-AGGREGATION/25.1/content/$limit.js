// O operador $limit limita o número de documentos que será passado para o próximo estágio do pipeline. Ele sempre recebe um valor do tipo inteiro e positivo.

db.articles.aggregate([
  { $limit : 5 }
]);
