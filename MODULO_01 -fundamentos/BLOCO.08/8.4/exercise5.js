// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, name) =>
  acc + name.toLowerCase().split('').reduce((acumulator, current) => current === 'a'? acumulator + 1 : acumulator, 0), 0);
};
console.log(containsA());

// assert.deepStrictEqual(containsA(), 20);
