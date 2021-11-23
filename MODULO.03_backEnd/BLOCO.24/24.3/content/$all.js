db.collection.find(
  {
    nomeArray: {
      $all: ["nome1", "nome4"] // retornará os documentos que tiverem o 'nomeArray' com os "nome1" e "nome4" nele, inteiro.
    }
  },
  { vooId: 1, nomeArray: 1 }
);
// o $all fará a verificação se todos elementos que estao no seu array estão em algum documento, e se tiver, retornará ele inteiro
