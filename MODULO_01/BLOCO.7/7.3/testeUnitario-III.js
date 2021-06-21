const assert = require('assert');

function division(x, y) {
  return x / y;
}
assert.strictEqual(division(10, 2), 5); // OK
assert.strictEqual(division(10, 0), 0); // 💣


// funç modificada para previnir erro 💣 de divisão por 0:
function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
  // Queremos que o código retorne um erro com uma mensagem específica caso o parâmetro y seja 0. Por isso lançamos uma exceção se essa condição for verdadeira, o que irá interromper a execução da função.
}
assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK
