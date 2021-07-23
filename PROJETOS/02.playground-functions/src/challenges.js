// Desafio 01
function compareTrue(x, y) {
  if (x === true && y === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arrStr) {
  let firstName = arrStr[0];
  let lastIndex = arrStr.length - 1;
  let lastName = arrStr[lastIndex];
  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = 0;
  totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(numbersArr) {
  let high = -999;
  let howManyHigh = [];

  for (let i = 0; i < numbersArr.length; i += 1) {
    if (numbersArr[i] > high) {
      high = numbersArr[i];
    }
  }

  for (let j = 0; j < numbersArr.length; j += 1) {
      if (high === numbersArr[j]) {
        howManyHigh.push(j);
      }
  }
return howManyHigh.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse
  let distanceCat2 = cat2 - mouse

  if (distanceCat1 < 0) {
    distanceCat1 = distanceCat1 * (-1);
  } else if (distanceCat2 < 0) {
    distanceCat2 = distanceCat2 * (-1);
  }

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } else if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrNumb) {
  let arrResult = [];

  for (let i = 0; i < arrNumb.length; i += 1) {
    
    if (arrNumb[i] % 3 === 0 && arrNumb[i] % 5 === 0) {
      arrResult.push('fizzBuzz');
    } else if (arrNumb[i] % 3 === 0) {
      arrResult.push('fizz');
    } else if (arrNumb[i] % 5 === 0) {
      arrResult.push('buzz');
    } else {
      arrResult.push('bug!');
    }
  }
  return arrResult;
}

// Desafio 9
function encode(str) {
  let novaStr = '';
  let arrStr = str.split('');
  
  for (let i = 0; i < arrStr.length; i += 1) {
    if (arrStr[i] === 'a') {
      arrStr[i] = 1;
      novaStr += arrStr[i];
    } else if (arrStr[i] === 'e') {
      arrStr[i] = 2;
      novaStr += arrStr[i];
    } else if (arrStr[i] === 'i') {
      arrStr[i] = 3;
      novaStr += arrStr[i];
    } else if (arrStr[i] === 'o') {
      arrStr[i] = 4;
      novaStr += arrStr[i];
    } else if (arrStr[i] === 'u') {
      arrStr[i] = 5;
      novaStr += arrStr[i];
    } else {
      novaStr += arrStr[i];
    }
  }
return novaStr;
}

function decode(str) {
  let novaStr = '';
  let arrStr = str.split('');
  
  for (let i = 0; i < arrStr.length; i += 1) {
    if (arrStr[i] === '1') {
      arrStr[i] = 'a';
      novaStr += arrStr[i];
    } else if (arrStr[i] === '2') {
      arrStr[i] = 'e';
      novaStr += arrStr[i];
    } else if (arrStr[i] === '3') {
      arrStr[i] = 'i';
      novaStr += arrStr[i];
    } else if (arrStr[i] === '4') {
      arrStr[i] = 'o';
      novaStr += arrStr[i];
    } else if (arrStr[i] === '5') {
      arrStr[i] = 'u';
      novaStr += arrStr[i];
    } else {
      novaStr += arrStr[i];
    }
  }
  return novaStr;
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
