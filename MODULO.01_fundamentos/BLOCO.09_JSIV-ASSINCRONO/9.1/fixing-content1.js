// 1. No código abaixo você tem a função getUser , que retorna uma pessoa qualquer. Complete a função getUser de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada.

const assert = require('assert');

const userFullName = ({ firstName, lastName }) =>
  `Hello! My name is ${firstName} ${lastName}`;

const userNationality = ({ firstName, nationality }) =>
  `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn);
};

console.log(getUser(userFullName));
console.log(getUser(userNationality));

assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich");
assert.strictEqual(getUser(userNationality), "Ivan is Russian");
