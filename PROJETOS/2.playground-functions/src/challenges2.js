// Desafio 10
function techList(lista, name) {
  let objArr = [];
  let object = {};

  if (lista.length === 0) {
    return 'Vazio!';
  }

  for (let i = 0; i < lista.length; i += 1) {
    object = {
      tech: lista[i],
      name: name
    };
    objArr.push(object);
  }

  objArr.sort(function compare(x, y) {

    if (x.tech > y.tech) {
      return 1;
    } else if ( y.tech > x.tech) {
      return -1;
    } else {
      return 0;
    }
  });

  return objArr;
}

// Desafio 11
function generatePhoneNumber(arr) {

}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
