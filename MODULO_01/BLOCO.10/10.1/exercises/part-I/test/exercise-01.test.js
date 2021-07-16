const sum = require('../src/exercise-01');

describe('Testes para função sum', () => {
  it('Deve retornar 9 quando os parametros forem 4 e 5', () => {
    expect(sum(4, 5)).toBe(9);
  })

  it('Deve retornar 0 se os parametros forem zero', () => {
    expect(sum(0, 0)).toBe(0);
  })

  it('Deve retornar um erro quando um dos parâmetros for uma String', () => {
      expect(() => sum(4, '5')).toThrow();
  })

  it('Deve retornar a msg: "parameters must be numbers" quando um dos parâmetros for uma String', () => {
    expect(() => sum(4, '5')).toThrow(/parameters must be numbers/);
  });
})


// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")