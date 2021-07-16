const sum = (a, b) => {

  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

module.exports = sum;

// A função sum(a, b) retorna a soma do parâmetro a com o b
