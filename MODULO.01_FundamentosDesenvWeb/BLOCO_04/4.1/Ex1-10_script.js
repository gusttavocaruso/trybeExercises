let A = 2;
let B = 6;
let C = 4;
let maior;
let ang1 = 60;
let ang2 = 60;
let ang3 = 60;
let somaAngs = (ang1 + ang2 + ang3);
let chessRock = "RAINHA".toLowerCase();
let notaEmPercentual = 69;
let custoProduto = 10;
let valorProduto = 20;

console.log("EX1--");
let ad = (A + B);
let sub = (A - B);
let mul = (A * B);
let div = (A / B);
let mod = (A % B);

console.log(ad);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);

console.log("EX2--");
if (A > B) {
  console.log(A);
} else {
  console.log(B);
}

console.log("EX3--");
if (A > B && A > C) {
    console.log(A);
    maior = A;
} else if (B > A && B > C) {
    console.log(B);
    maior = B;
} else if (C > A && C > B) {
    console.log(C);
    maior = C;
}

console.log("EX4--");
if (maior > 0) {
  console.log("Positive");
} else if (maior === 0) {
  console.log("Zero");
} else {
  console.log("Negative");
}

console.log("EX5--");
if (somaAngs === 180) {
  console.log(true);
} else if (somaAngs < 180) {
  console.log(false);
} else {
  console.log("Angulos inválidos");
}

console.log("EX6--");
switch (chessRock) {
  case "peão":
    console.log("Anda para frente & come na diagonal");
    break;

  case "bispo":
    console.log("Anda na diagonal de sua cor");
    break;

  case "cavalo":
    console.log("Anda em L");
    break;
  
  case "torre":
    console.log("Anda em linha reta");
    break;

  case "rainha":
    console.log("pode andar em linha reta ou em diagonal");
    break;

  case "rei":
    console.log("pode andar em linha reta ou em diagonal, porém, apenas uma casa");
    break;

default: console.log("Não é uma peça de xadrez");
}

console.log("EX7 --");
if (notaEmPercentual >= 90 && notaEmPercentual <= 100) {
  console.log("Sua nota é A!");
} else if (notaEmPercentual < 90 && notaEmPercentual >= 80) {
  console.log("Sua nota é B!");
} else if (notaEmPercentual < 80 && notaEmPercentual >= 70) {
  console.log("Sua nota é C!");
} else if (notaEmPercentual < 70 && notaEmPercentual >= 60) {
  console.log("Sua nota é D!");
} else if (notaEmPercentual < 60 && notaEmPercentual >= 50) {
  console.log("Sua nota é E!");
} else if (notaEmPercentual < 50 && notaEmPercentual > 0) {
  console.log("Sua nota é F!");
} else {
 console.log("ERROR. 404 NOT FOUND");
}

console.log("EX8 --");
if (A % 2 === 0 || B % 2 === 0 || C % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

console.log("EX9 --");
if (A % 2 != 0 || B % 2 != 0 || C % 2 != 0) {
  console.log(true);
} else {
  console.log(false);
}

console.log("EX10 --");
custoTotalProduto = custoProduto + (custoProduto * 0,2);
lucroProduto = valorProduto - custoTotalProduto;
lucroPraMil = 1000 * lucroProduto;
console.log(lucroPraMil);
