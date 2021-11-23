const myRemoveWithoutCopy = require('../src/exercise-03');

describe('Teste para a função myRemoveWithoutCopy', () => {
  it('Deve retornar um array sem o número passado no segundo parametro', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(arr, 3)).toEqual([1, 2, 4]);
  })

  it('Não deve retornar o array passado no primeiro parametro com o numero do segundo parametro', () => {
    const arr = [1, 2, 3, 4];
    expect(() => myRemoveWithoutCopy(arr, 3)).not.toEqual(arr);
  })

  it('Deve retornar o mesmo array do primeiro parametro caso o não exista nele o numero do segundo parametro', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(arr, 5)).toEqual(arr);
  })

  //"Verifique se o array passado por parâmetro não sofreu alterações" não sei como fazer
})


// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado