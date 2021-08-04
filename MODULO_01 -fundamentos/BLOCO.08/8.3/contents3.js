const numbers = [1, 2, 3, 4, -5];


// -------- com .map():
let negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); 
console.log(numbers); 


// -------- com for:
negativeNumbers = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > 0) {
    negativeNumbers.push(numbers[index] * -1);
  } else {
    negativeNumbers.push(numbers[index]);
  }
};
console.log(negativeNumbers); 
console.log(numbers); 
