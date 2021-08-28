// 1.
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
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
img1.src = 'https://picsum.photos/200';
img1.className = 'small-image';
div3.appendChild(img1);

// 8.
let lista = document.createElement('ul');
let arr = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

let listaLi = [];
for (let i = 0; i < arr.length; i += 1) {
  listaLi = document.createElement('li');
  listaLi.innerText = arr[i];
  div4.appendChild(listaLi);
}

// 9.
let h3 = [];
for (let j = 0; j < 3; j += 1) {
  h3 = document.createElement('h3');
  div1.appendChild(h3);
};

//  -----------

// 1.
h1.className = 'title';

// 2.
h3.className = 'description';

// 3.
div1.removeChild(div3);

// 4.
div4.style.marginRight = 'auto';

// 5.
div1.style.backgroundColor = 'green';

// 6.
div4.lastChild.remove();
div4.lastChild.remove();
