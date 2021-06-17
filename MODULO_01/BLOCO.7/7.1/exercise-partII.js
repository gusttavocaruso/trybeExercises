// odio mortal de exercicio de fatorar numero
let result = 1;

const fatorial = (x) => {
  for (let i = 1; i <= x; i += 1) {
   result *= x * (x - i);
  }
  return result;
}
console.log(fatorial(4));
