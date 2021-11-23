db.inventory.find(
  {
    qty: {
      $mod: [4, 0]
    }
  }
);
// seleciona todos os documentos em que o valor do campo dividido por um divisor seja igual ao valor especificado
// selecionará todos os documento em que o valor do campo 'qnty' divido por 4 será igual a 0
