const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    releaseYear: 1991,
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    releaseYear: 1954,
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    releaseYear: 1951,
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    releaseYear: 1965,
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    releaseYear: 1986,
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    releaseYear: 1928,
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
  },
];

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
};
console.log(formatedBookNames());

assert.deepStrictEqual(formatedBookNames(), expectedResult);
