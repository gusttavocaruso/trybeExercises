const assert = require('assert');


// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
};

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
