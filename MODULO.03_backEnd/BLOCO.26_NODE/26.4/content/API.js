// API é uma sigla para A pplication P rogramming I nterface. Ou seja, Interface de programação de aplicação .

const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (_req, res) {
  res.json(recipes);
});

// PARAMETROS DE ROTA ==========>
app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});
// <=============

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

/*

Para acessar o valor do parâmetro enviado na URL fizemos a desestruturação do atributo id do objeto req.params . Começamos a entender que o objeto req traz informações a respeito da requisição. É importante que o nome do parâmetro nomeado na rota seja igual ao atributo que você está desestruturando. Por exemplo, se na definição da rota estivesse escrito /recipes/:nome teríamos que usar const { nome } = req.params .

Atenção: Perceba que na linha com o if colocamos um return . Isso serve para indicar para o express que ele deve quebrar o fluxo e não executar a linha res.status(200).json(recipe); . Caso você não coloque o return , sua requisição vai funcionar mas você vai ver um erro como este abaixo no log do seu terminal:
  Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

Esse erro significa que o Express entendeu que você está tentando retornar duas respostas para o cliente. Por isso é preciso ter cuidado para sempre que existir uma condição que pode quebrar o fluxo principal colocar um return antes do res.json para não ter esse problema. Este é um erro bem comum para quem está começando a utilizar Express, então caso tenha esse problema, você já sabe o que fazer a partir de agora.
*/
