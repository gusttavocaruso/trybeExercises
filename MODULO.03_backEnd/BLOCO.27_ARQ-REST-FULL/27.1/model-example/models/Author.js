const connection = require('./connection');

// Busca todos os autores do banco.
const getAll = async () => {
  const [authors] = await connection.execute(
      'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors;
};

module.exports = {
    getAll,
};

/*
Utilizamos o método execute para fazer uma query mysql como já estamos acostumados. Esse método retorna uma Promise que quando resolvida, nos fornece um array com 2 campos: [rows, fields] . Na primeira posição desse array temos a resposta que desejamos (no caso os authors ) e na segunda posição vêm algumas informações extras sobre a query que não iremos utilizar.
No exemplo, desconstruímos essa resposta utilizando [authors] que chega para nós da seguinte forma: */

[
  {
    id: 1,
    first_name: 'George',
    middle_name: 'R. R.',
    last_name: 'Martin'
  },
  {
    id: 2,
    first_name: 'J.',
    middle_name: 'R. R.',
    last_name: 'Tolkien'
  },
  {
    id: 3,
    first_name: 'Isaac',
    middle_name: null,
    last_name: 'Asimov'
  },
  {
    id: 4,
    first_name: 'Frank',
    middle_name: null,
    last_name: 'Herbert'
  },
  {
    id: 5,
    first_name: 'Júlio',
    middle_name: null,
    last_name: 'Verne'
  }
];

/*
Note que o retorno da consulta do banco não está no formato que desejamos ( camelCase ). Logo criaremos uma função para realizar essa conversão ( serialize ) e faremos a seguinte modificação no código para arrumar isso. */

//const connection = require('./connection');

//Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

//Busca todos os autores do banco.
//const getAll = async () => {
//const [authors] = await connection.execute(
//  'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
//);
  return authors.map(serialize);
// };

// module.exports = {
//  getAll,
// };

/*
Agora temos os campos no formato correto. E como mencionado anteriormente, queremos o nome completo de autores em um campo da resposta, então vamos implementar uma função com essa finalidade ( getFullNameAuthor ). */

//models/Author.js

//const connection = require('./connection');

//Cria uma string com o nome completo do autor
const getFullNameAuthor = (first_name, middle_name, last_name) => {
/* Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false` */
  const fullName = [first_name, middle_name, last_name]
    .filter(Boolean)
    .join(' ');

  return fullName;
};

// Converte o nome dos campos de snake_case para camelCase
const serialize = ({ id, first_name, middle_name, last_name }) => ({
  id,
  firstName: first_name,
  middleName: middle_name,
  lastName: last_name,
  fullName: getFullNameAuthor(first_name, middle_name, last_name),
});

//Busca todos os autores do banco.
//const getAll = async () => {
//  const [authors] = await connection.execute(
//    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
//  );
//  return authors.map(serialize);
//};

//module.exports = {
//  getAll,
//};
