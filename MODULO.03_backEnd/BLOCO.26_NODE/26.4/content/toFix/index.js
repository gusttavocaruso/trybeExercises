// 1. Crie uma array drinks com os seguintes objetos dentro dela e uma rota GET /drinks que retorna a lista de bebidas.

const drinks = [
    { id: 1, name: 'Refrigerante Lata', price: 5.0 },
    { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
    { id: 3, name: 'Suco 300ml', price: 4.0 },
    { id: 4, name: 'Suco 1l', price: 10.0 },
    { id: 5, name: 'Cerveja Lata', price: 4.5 },
    { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

// 2. Modifique tanto a rota de bebidas como de receitas para retornar a lista ordenada pelo nome em ordem alfabética.

// 3. Crie uma rota GET /drink/:id para retornar uma bebida pelo id .

// 4. Modifique o código da nossa rota para que ela receba um terceiro parâmetro através de query string com o atributo minPrice e modifique o filter para trazer apenas os receitas onde o valor da receita seja maior ou igual ao o valor enviado como parâmetro, mantendo os filtros anteriores.

// 5. Implemente uma rota /drinks/search que permita pesquisar pelo atributo name usando query string.

// 6. Crie uma rota POST /drinks que permita adicionar novas bebidas através da nossa API.

// 7. Modifique o código acima da rota POST /recipes para que receba e salve a receita com o atributo waitTime .

// 8. Crie uma rota PUT /drinks/:id que permita editar os atributos de uma bebida.

// 9. Crie uma rota DELETE /drinks/:id que permita remover uma bebida.
