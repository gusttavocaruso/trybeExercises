let A = 2;
let B = 6;
let C = 4;
let maior;
let ang1 = 60;
let ang2 = 60;
let ang3 = 60;
let somaAngs = (ang1 + ang2 + ang3);

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
