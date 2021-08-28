// 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('upperCase functions test', () => {
  it('should return a string with all letter in upper case', (done) => {
    uppercase('test', (str) => {
      expect(str).toBe('TEST');
      done();
    });
  })
})
