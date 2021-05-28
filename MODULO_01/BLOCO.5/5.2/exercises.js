// 1.
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.1 - JavaScript DOM';
document.body.appendChild(h1);

// 2.
let div1 = document.createElement('div');
div1.className = 'main-content';
document.body.appendChild(div1);

// 3.
let div2 = document.createElement('div');
div2.className = 'center-content';
div1.appendChild(div2);

// 4.
let text = document.createElement('p');
text.innerText = 'Algum texto';
div2.appendChild(text);

// 5. 
let div3 = document.createElement('div');
div3.className = 'left-content';
div1.appendChild(div3);

// 6.
let div4 = document.createElement('div');
div4.className = 'right-content';
div1.appendChild(div4);

// 7.
let img1 = document.createElement('img');
img1.inputMode = 'https://picsum.photos/200';
img1.className = 'small-image';
div4.appendChild(img1);

// 8. ---- LOADING..
let lista = document.createElement('ul');
let arr = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

for (let i = 0; i < arr.length; i += 1) {
  let listaLi = document.createElement('li');
  listaLi.innerText = arr[i];
  div4.appendChild(listaLi);
}

// div4.appendChild(lista);
// lista.appendChild(listaElements);