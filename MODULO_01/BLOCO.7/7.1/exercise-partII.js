// odio mortal de exercicio de fatorial 
const fatorial = (x) => {
  if (x === 1) {
    return 1;
  } else {
    return x * fatorial(x - 1)
  }
}
console.log(fatorial(4));



// ex2.. unfinished yet
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

function longestWord(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    let big = words[i];
    if (words[i].length > big.length) {
      big = words[i];
    }
    console.log(big);
    }
  }
