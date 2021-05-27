
//         Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//         - document.getElementById()
//         - document.getElementsByClassName()
//         - document.getElementsByTagName()

//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
document.getElementsByTagName('p')[0].innerText = "A Fcking Software Developer";

//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
document.getElementById('colorChange').style.backgroundColor = ('rgb(76,164,109)');

//  Crie uma função que mude a cor do quadrado vermelho para branco.
document.getElementById('colorChange2').style.backgroundColor = ('white');

//  Crie uma função que corrija o texto da tag <h1>.
document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript'

//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
let x = document.getElementsByTagName('p');
  for (let i = 0; i < x.length; i += 1) {
    x[i].innerText = x[i].innerText.toUpperCase();
  }

//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.
  for (let j = 0; j < x.length; j += 1) {
    console.log(x[j].innerText);
}
