const myFizzBuzz = require('../src/exercise-04');

describe('Teste para função myFizzBuzz', () => {
  it('Deve retornar fizzbuzz se o numero passado no parametro for div por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })

  it('Deve retornar fizz se o numero passado no parametro for div por 3', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  })

  it('Deve retornar o próprio número passado no parametro caso ele não seja div por 3 ou 5', () => {
    expect(myFizzBuzz(4)).toBe(4);
  })
})


// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado