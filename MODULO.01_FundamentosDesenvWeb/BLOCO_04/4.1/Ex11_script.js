
let salarioCarteira = 5400.1;
let salarioBruto = salarioCarteira;
let descontoINSS;
let descontoIR;
let salarioLiquido;
let descontoMaxINSS = 570.88;
let descontoMaxIR = 0.275;
let parcelaAbate;
let quantidadeDescontadaIR;
let quantidadeDescontadaINSS;

if (salarioBruto <= 1556.94) {
  descontoINSS = 0.08;
} else if (salarioBruto <= 2594.92 && salarioBruto > 1556.94) {
  descontoINSS = 0.09;
} else if (salarioBruto <= 5189.82 && salarioBruto > 2594.92) {
  descontoINSS = 0.11;
} else {
  descontoINSS = 0;
}

quantidadeDescontadaINSS = (salarioBruto * descontoINSS); 
if (quantidadeDescontadaINSS === 0) {
  quantidadeDescontadaINSS = descontoMaxINSS;
}

salarioBruto -= quantidadeDescontadaINSS;

if (salarioBruto <= 1903.98) {
  descontoIR;
} else if (salarioBruto <= 2826.65 && salarioBruto > 1903.98) {
  descontoIR = 0.075;
  parcelaAbate = 142.8;
} else if (salarioBruto <= 3751.05 && salarioBruto > 2826.65) {
  descontoIR = 0.15;
  parcelaAbate = 354.8;
} else if (salarioBruto <= 4664.68 && salarioBruto > 3751.05) {
  descontoIR = 0.225;
  parcelaAbate = 636.13;
} else {
  descontoIR = descontoMaxIR;
  parcelaAbate = 869.36;
}

quantidadeDescontadaIR = (salarioBruto * descontoIR) - parcelaAbate;

salarioLiquido = salarioBruto - quantidadeDescontadaIR;

console.log("Se o seu salário bruto for R$: ");
console.log(salarioCarteira);
console.log("o seu salário líquido será de R$: ");
console.log(salarioLiquido);
