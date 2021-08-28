console.log(palindromoCheck('arara'));
console.log(palindromoCheck('desenvolvimento'));

function palindromoCheck (word) {
  let wordSplit = word.split('');
  let direitaEsq = '';
  let esquerdaDir = '';

  for (let i = 0; i < wordSplit.length; i += 1) {
    direitaEsq += wordSplit[i]; 
  }
  console.log(direitaEsq);

  for ( let j = wordSplit.length -1; j >= 0; j -= 1) {
    esquerdaDir += wordSplit[j];
  }
  console.log(esquerdaDir);

  if (direitaEsq === esquerdaDir) {
    return true;
  } else {
    return false;
  }

}
