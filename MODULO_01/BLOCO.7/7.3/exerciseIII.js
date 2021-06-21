const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }
  return arr;
}
// implemente seus testes aqui

// 1.
const arr = [1, 2, 3, 4];
console.log(myRemoveWithoutCopy(arr, 3));

// 2.
assert.strictEqual(myRemoveWithoutCopy(arr, 3), arr, 'whata?');

// 4.
assert.strictEqual(myRemoveWithoutCopy(arr, 5), arr);