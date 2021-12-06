// Para nosso exemplo, vamos definir uma rota /pratos/pesquisar?nome=Macarrão que permita, inicialmente, buscar uma lista de receitas filtrando pelo nome. Vamos usar o código abaixo.

app.get('/recipes/search', function (req, res) {
  const { name } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name));
  res.status(200).json(filteredRecipes);
});

// app.get('/recipes/:id', function (req, res) {
//  const { id } = req.params;
//  const recipe = recipes.find((r) => r.id === parseInt(id));
//  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});
//
//  res.status(200).send(recipe);
// });


/*
Perceba, que nessa rota, utilizamos req.query e desestruturamos o atributo nome, para na sequência usar como parâmetro de busca. Dessa vez usamos uma outra HOF, a função filter , para filtrar os receitas que contenham ( .includes ) o nome recebido através da query string e no final devolvemos a lista de receitas obtidas por esse filtro.

Note que nossa rota ficou apenas com o prefixo /recipes/search já que os parâmetros enviados query string, não dependem desse prefixo e sim das informações que vem após o uso da ? na URL. É importante entender que na URL podemos colocar quantos parâmetros desde que eles sigam o formato <chave>=<valor> e que entre cada parâmetro, exista o & para definir que ali está sendo passado um novo parâmetro.


⚠️ Observação: Quando houver rotas com um mesmo radical e uma destas utilizar parâmetro de rota, as rotas mais específicas devem ser definidas sempre antes. Isso porque o Express ao resolver uma rota vai olhando rota por rota qual corresponde a URL que chegou. Se colocamos a rota /recipes/search depois da rota /recipes/:id , o Express vai entender que a palavra search como um id e vai chamar a callback da rota /recipes/:id . Tenha atenção a esse detalhe ao utilizar rotas similares na definição da sua API. */
