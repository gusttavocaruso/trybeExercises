const pixelBoard = document.getElementById('pixel-board');

for (let i = 0; i < 25; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
  pixel.style.backgroundColor = 'rgb(255, 255, 255)';
}

const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
const colorFour = document.querySelector('.four');

window.onload = function blackStarts() {
  colorOne.classList.add('selected');
};

function getFirstColor() {
  colorOne.classList.add('selected');
  colorTwo.className = 'color two';
  colorThree.className = 'color three';
  colorFour.className = 'color four';
}

function getSecondColor() {
  colorOne.className = 'color one';
  colorTwo.classList.add('selected');
  colorThree.className = 'color three';
  colorFour.className = 'color four';
}

function getTirdColor() {
  colorOne.className = 'color one';
  colorTwo.className = 'color two';
  colorThree.classList.add('selected');
  colorFour.className = 'color four';
}

function getFourthColor() {
  colorOne.className = 'color one';
  colorTwo.className = 'color two';
  colorThree.className = 'color three';
  colorFour.classList.add('selected');
}

const pixel = document.querySelectorAll('.pixel');

colorOne.addEventListener('click', getFirstColor);
colorTwo.addEventListener('click', getSecondColor); 
colorThree.addEventListener('click', getTirdColor);
colorFour.addEventListener('click', getFourthColor);

function paint(event) {
  const colorSelected = document.querySelector('.selected');
  const cssStyle = window.getComputedStyle(colorSelected).getPropertyValue('background-color');
  event.target.style.backgroundColor = cssStyle;
}

for (let j = 0; j < pixel.length; j += 1) {
  pixel[j].addEventListener('click', paint);
}

const clearButton = document.getElementById('clear-board');

function clearFunc() {
  for (let i = 0; i < pixel.length; i += 1) { 
    pixel[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

clearButton.addEventListener('click', clearFunc);
