let arr = [2, 3, 6, 7, 10, 1];
console.log(maiorIndex(arr));

function maiorIndex(array) {
  let bigger = 0;
  
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > bigger) {
      bigger = array[i];
      indexBigger = i;
    }

  } return indexBigger;

}

let arr2 = [2, 3, 6, 7, 10, 0, -3]; 
console.log(menorIndex (arr2));

function menorIndex(array) {
  let lower = 0;
  
  for (let j = 0; j < array.length; j += 1) {
    if (array[j] < lower) {
      lower = array[j];
      indexLower = j;
    }

  } return indexLower;

}