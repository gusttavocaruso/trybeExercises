const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
// implemente seus testes aqui

// 1.
const arr = [1, 2, 3, 4];
console.log(myRemove(arr, 3));

// 2.
// assert.strictEqual(myRemove(arr, 3), arr, 'Não deve retornar o próprio array');

// 4.
assert.strictEqual(myRemove(arr, 5), arr); 
// Resultado foi o esperado, mas mesmo assim acusou erro.
// Output =>
// actual: [ 1, 2, 3, 4 ],
// expected: [ 1, 2, 3, 4 ],