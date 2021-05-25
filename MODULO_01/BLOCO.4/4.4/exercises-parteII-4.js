arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorQntCaracter(arrayTeste));

function maiorQntCaracter(arr) {
  indexCaracter = 0;
  
  for (let i = 0; i < arr.length; i += 1) {
    indexCaracter = arr[i];
    let A = indexCaracter.split('');
    if (A > 0) {
      maiorCaracter = A;
    } 
  }

}
// TERMINAR