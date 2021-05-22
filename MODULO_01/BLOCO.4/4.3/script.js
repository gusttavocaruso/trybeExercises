let n = 5;
let symbol = "*";
let square = '';

EX1
for (let i = 1; i <= n; i += 1) {
  square += symbol;
}

for (let i2 = 1; i2 <= n; i2 += 1) {
  console.log(square);
}

EX2
for (let i = 0; i <= n; i += 1) {
  console.log(square);
  square += symbol;
}

EX3
let position = n;
for (let i = 0; i <= n; i += 1) {
  for (let i2 = 0; i2 <= n; i2 += 1) {
    if (i2 < position) {
      square += ' ';
    } else {
      square += symbol;
    }
  }
  console.log(square);
  square = '';
  position -= 1;
}

 EX4

let squareMid = (n + 1) / 2;
let squareLeft = squareMid;
let squareRight = squareMid;

for (let i = 0; i < squareMid; i += 1) {
  for (let i2 = 0; i2 <= n; i2 += 1) {
    if (i2 >= squareLeft && i2 <= squareRight) {
      square += symbol;
    } else {
      square += ' ';
    }
  }
  console.log(square);
  square = '';
  squareRight += 1;
  squareLeft -= 1;
}


EX-X
let position = n;
for (let i = 0; i <= n; i += 1) {
  for (let i2 = 0; i2 <= n; i2 += 1) {
    if (i2 < i) {
      square += ' ';
    } else {
      square += symbol;
    }
  }
  console.log(square);
  square = '';
  position -= 1;
}