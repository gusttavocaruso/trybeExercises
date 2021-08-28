let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// EX1
console.log(`Os itens que estão nesse array são: ${numbers}`);

// EX2
let somaNumbers = 0;
for (let index = 0; index < numbers.length; index += 1) {
  somaNumbers += numbers[index];
}
console.log(`A soma de todos itens do array é: ${somaNumbers}`);


// EX3
somaNumbers = 0;
for (let index = 0; index < numbers.length; index += 1) {
  somaNumbers += numbers[index];
  media = (somaNumbers / numbers.length);
}
console.log(`A média dos itens do array é: ${media}`);

// EX4
if (media > 20) {
  console.log("A média é maior que 20");
} else {
  console.log("A média é menor ou igual a 20");
}

// EX5
let maiorNumber = 0;
for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumber) {
    maiorNumber = numbers[index];
  } 
}
console.log(`o maior número desse array é: ${maiorNumber}`);

// EX6
let impares = [];
for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 != 0) {
    impares.push(numbers[index]);
  }
}
if (impares.length > 0) {
  console.log(`Os números impares desse array são: ${impares}`);
} else {
  console.log("Não tem números impares nesse Array");
}

// EX7
let menorNumber = 9999;
for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menorNumber) {
    menorNumber = numbers[index];
  } 
}
console.log(`o menor número desse array é: ${menorNumber}`);

// EX8
let novoArray = [];
for (index = 1; index < 26; index += 1) {
  novoArray.push(index);
}
console.log(`Foi criado um novo Array e os números dele são: ${novoArray}`);

// EX9
let novoArrayDivididoPor2 = [];
for (index = 0; index < novoArray.length; index += 1) {
  novoArrayDivididoPor2.push(novoArray[index]/2, " ");
}
console.log(`O novo Array criado, todo dividido por 2 é: ${novoArrayDivididoPor2}`);
