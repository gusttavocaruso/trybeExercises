// 1.
let x = document.querySelector('#elementoOndeVoceEsta');
console.log(x);

// 2.
x.parentElement.style.backgroundColor = 'green';

// 3.
let y = document.querySelector('#primeiroFilhoDoFilho');
y.innerText = 'adicionar esse texto aqui';

// 4.
let z = document.querySelector('#pai');
console.log(z.firstElementChild);

// 5.
console.log(x.parentElement);