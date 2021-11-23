const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}
// implemente seus testes aqui

// 1.
assert.strictEqual(sum(4, 5), 9, 'Quatro + cinco é nove');

// 2.
assert.strictEqual(sum(0, 0), 0, 'zero + zero é.. ?');

// 3.
assert.strictEqual(sum('4', '5'), 9); // ERROR
