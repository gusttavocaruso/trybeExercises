function sum(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

function mod(x, y) {
  return x % y;
}

function bigger(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function bigger(x, y, z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
  }
}

function posOrNeg (x) {
 if (x > 0) {
   return 'positive';
 } else if (x < 0) {
   return 'negative';
 } else {
   return 'zero';
 }
}

function tri(x, y, z) {
  if (x + y + z === 180) {
    return true;
  } else if (x < 0 || y < 0 || z < 0) {
    return 'Angulo invalido';
  } else {
    return false;
  }
}

function chess(x) {
  if (x.toLowerCase() === 'peão') {
    return 'Anda pra frente e come na diagonal';
  }
}

function notaPercent(x) {
  if (x >= 90) {
    return 'A';
  }
}

function par(x, y, z) {
  if (x % 2 === 0 || y % 2 === 0 || z % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function par(x, y, z) {
  if (x % 2 != 0 || y % 2 != 0 || z % 2 != 0) {
    return true;
  } else {
    return false;
  }
}

function lucroPMil(custo, valorVenda) {
  let impostoProduto = custo * 0.2;
  let custoReal = custo + impostoProduto;
  let lucro = valorVenda - custoReal;
  return lucro * 1000
}

console.log(lucroPMil(10, 20));
