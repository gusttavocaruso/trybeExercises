// CALCULA QUAL SERÁ O SALÁRIO LÍQUIDO A PARTIR DO VALOR QUE ESTÁ NA CARTEIRA DE TRABALHO.
// CONSIDERA DESCONTOS DE INSS E IR E TAMBÉM PARCELA DE DEDUÇÃO DO IMPOSTO.

function liquidSalary(salarioCarteira) {
  let descontoINSS;
  let descontoINSSBigger = 570.88;
  let howManyINSSDown;
  let descontoIR;
  let salarioLiquido;

  if (salarioCarteira <= 1556.94) {
      descontoINSS = 0.08;
    } else if (salarioCarteira <= 2594.92 && salarioCarteira > 1556.94) {
      descontoINSS = 0.09;
    } else if (salarioCarteira <= 5189.82 && salarioCarteira > 2594.92) {
      descontoINSS = 0.11;
    } else {
      descontoINSS = 0;
    } 
  
  howManyINSSDown = (salarioCarteira * descontoINSS); 
    if (howManyINSSDown === 0) {
      howManyINSSDown = descontoINSSBigger;
    }

  salarioCarteira -= howManyINSSDown;

  if (salarioCarteira <= 1903.98) {
    descontoIR;
  } else if (salarioCarteira <= 2826.65 && salarioCarteira > 1903.98) {
    descontoIR = 0.075;
    parcelaAbate = 142.8;
  } else if (salarioCarteira <= 3751.05 && salarioCarteira > 2826.65) {
    descontoIR = 0.15;
    parcelaAbate = 354.8;
  } else if (salarioCarteira <= 4664.68 && salarioCarteira > 3751.05) {
    descontoIR = 0.225;
    parcelaAbate = 636.13;
  } else {
    descontoIR = 0.275;
    parcelaAbate = 869.36;
  }

  howManyIRDown = (salarioCarteira * descontoIR) - parcelaAbate;

  salarioLiquido = salarioCarteira - howManyIRDown;

  return salarioLiquido.toFixed(2);
}


// CALCULA QUAL SERÁ O SALÁRIO LÍQUIDO A PARTIR DO VALOR QUE ESTÁ NA CARTEIRA DE TRABALHO.
// CONSIDERA DESCONTOS DE INSS E IR 
// !NÃO! CONSIDERA PARCELA DE DEDUÇÃO DO IMPOSTO.


// insira seu salário:
salarioCarteira = 0;




console.log(liquidSalary(salarioCarteira));
