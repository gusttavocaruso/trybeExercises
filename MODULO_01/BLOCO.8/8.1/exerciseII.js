const lotery = (yourCall) => {
  const aleatoryNumb = Math.floor(Math.random() * 5) + 1; 
  return yourCall !== aleatoryNumb ? 'Tente novamente' : 'Congrats. You win';
};
console.log(lotery(2));
// fonte para geração de número randomico: http://devfuria.com.br/javascript/gerar-numero-randomico-entre-2-numeros-quaisquer/



// Resolução Course (mais complexa criando func como parâmetro sem necessidade):
const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));
