// 2. No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. Complete a função getUser de forma que ela receba um callback para que possa realizar as operações abaixo sobre a pessoa.

const userFullName = ({ firstName, lastName }) =>
  `Hello! My name is ${firstName} ${lastName}`;

const userNationality = ({ firstName, nationality }) =>
  `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) =>
  Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    return callback(user);
  }, delay());
};

console.log(getUser(userFullName));
console.log(getUser(userNationality));
