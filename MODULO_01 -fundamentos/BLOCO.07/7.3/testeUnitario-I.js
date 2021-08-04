const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 == 50
assert.strictEqual(50, 70); // AssertionError: 50 == 70


const assert = require('assert');

function division(x, y) {
  return x / y;
}
const expected = division(9, 3);
assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três');