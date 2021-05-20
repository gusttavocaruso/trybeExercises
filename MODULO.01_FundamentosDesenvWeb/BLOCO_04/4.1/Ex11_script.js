
let salarioBruto = 5400.10;
let descontoINSS;
let descontoIR;
let salarioLiquido;
let descontoMaxINSS = 570.88;
let descontoMaxIR = 0.275;
let quantidadeDescontadaIR;
let quantidadeDescontadaINSS;
let quantidadeDescontadaINSS2;

if (salarioBruto <= 1903.98) {
  descontoIR;
} else if (salarioBruto <= 2826.65 && salarioBruto > 1903.98) {
  descontoIR = 0.075;
  // console.log("+ parcela de R$ 142,80 a deduzir do imposto");
} else if (salarioBruto <= 3751.05 && salarioBruto > 2826.65) {
  descontoIR = 0.15;
  // console.log("+ parcela de R$ 354,80 a deduzir do imposto");
} else if (salarioBruto <= 4664.68 && salarioBruto > 3751.05) {
  descontoIR = 0.225;
  // console.log("+ parcela de R$ 636,13 a deduzir do imposto");
} else {
  descontoIR = descontoMaxIR;
  // console.log("+ parcela de R$ 869,36 a deduzir do imposto");
}
quantidadeDescontadaIR = salarioBruto * descontoIR; 

if (salarioBruto <= 1556.94) {
  descontoINSS = 0.08;
  quantidadeDescontadaINSS = salarioBruto * descontoINSS;
  quantidadeDescontadaINSS2 = 0;
} else if (salarioBruto <= 2594.92 && salarioBruto > 1556.94) {
  descontoINSS = 0.09;
  quantidadeDescontadaINSS = salarioBruto * descontoINSS;
  quantidadeDescontadaINSS2 = 0;
} else if (salarioBruto <= 5189.82 && salarioBruto > 2594.92) {
  descontoINSS = 0.11;
  quantidadeDescontadaINSS = salarioBruto * descontoINSS;
  quantidadeDescontadaINSS2 = 0;
} else {
  quantidadeDescontadaINSS = 0;
  quantidadeDescontadaINSS2 = descontoMaxINSS;
}

salarioLiquido = salarioBruto - (quantidadeDescontadaINSS + quantidadeDescontadaINSS2 + quantidadeDescontadaIR);

console.log("Se o seu salário bruto for R$: ");
console.log(salarioBruto);
console.log("o seu salário líquido será de R$: ");
console.log(salarioLiquido);
