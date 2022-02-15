const fs = require('fs').promises;
/*
Exercicio 03
Reescreva o código do exercício anterior para que utilize async/await .
*/
async function main () {
  const randomNumber = () => Math.floor(Math.random() * 100 + 1);
  try {
    const response = await operacao(randomNumber(), randomNumber(), randomNumber());
    console.log(response);
  } catch(err) {
    console.log(err);
  }
}
