// odio mortal de exercicio de fatorial 
const fatorial = (x) => {
  if (x === 1) {
    return 1;
  } else {
    return x * fatorial(x - 1)
  };
};
console.log(fatorial(4));



// retornar maior palavra da frase => 'aconteceu'
const phrase = 'Antônio foi no banheiro e não sabemos o que aconteceu'

function longestWord(str) {
  let words = str.split(' ');
  let big = '';
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > big.length) {
      big = words[i];
    }
  };
  return big;
};
console.log(longestWord(phrase));
