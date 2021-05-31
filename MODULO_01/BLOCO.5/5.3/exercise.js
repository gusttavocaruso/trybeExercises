function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

// Ex1. 
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let ulDays = document.querySelector('#days');

for (let i = 0; i < dezDaysList.length; i += 1) {
  let liDays = document.createElement('li');
  ulDays.appendChild(liDays);
  let x = dezDaysList[i];

  if (x === 24 || x === 31) {
    liDays.className = 'day holiday';
  } else if (x === 4 || x === 11 || x === 18 || x === 31) {
    liDays.className = 'day friday';
  } else if (x === 25) {
    liDays.className = 'day holiday friday';
  }  else {
    liDays.className = 'day';
  }

  liDays.innerText = x;
}

// Ex2.
let divButtons = document.querySelector('.buttons-container');

function createButton(buttonName) {
  let newButton = document.createElement('button');
  
  divButtons.appendChild(newButton);
  newButton.id = 'btn-holiday';
  newButton.innerText = buttonName;
}
createButton('Feriado');

// Ex3.
let holidays = document.getElementsByClassName('holiday');
let holidaysButton = document.getElementById('btn-holiday');

holidaysButton.addEventListener('click', function () {
  for (let j = 0; j < holidays.length; j += 1) {
    if (holidays[j].style.backgroundColor === 'yellowgreen') {
      holidays[j].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holidays[j].style.backgroundColor = 'yellowgreen';
    }
  }
})

// Ex4.
function getFridayButton(fridayButtonName) {
  let fridayButton = document.createElement('button');
  fridayButton.id = 'btn-friday';
  divButtons.appendChild(fridayButton);
  fridayButton.innerText = fridayButtonName;
}
getFridayButton('Sextou');

// Ex5.
let fridays = document.getElementsByClassName('friday');

function letSextou(fridayArr) {
  let fridaysButton = document.getElementById('btn-friday');

  fridaysButton.addEventListener('click', function () {
    for (let k = 0; k < fridays.length; k += 1) {
      if (fridays[k].innerText !== 'SEXTOU') {
        fridays[k].innerText = 'SEXTOU';
      } else {
        fridays[k].innerText = fridayArr[k];
      }
    }
  })
}
let dezFridays = [4, 11, 18, 25];
letSextou(dezFridays);

// Ex6.
ulDays.addEventListener('mouseover', mouseOver);
ulDays.addEventListener('mouseout', mouseOut);

function mouseOver (event) {
  event.target.style.fontSize = '30px';
  event.target.style.fontWeight = '600';
}

function mouseOut (event) {
  event.target.style.fontSize = '20px';
  event.target.style.fontWeight = '300';
}

// Ex7.
function newTask(tasksName) {
  let divTasks = document.querySelector('.my-tasks');
  let task = document.createElement('span');

  task.innerHTML = tasksName;
  divTasks.appendChild(task);
};

let tasks = ['loundry'];

newTask(tasks);

// Ex8.
function addLeg(colorName) {
  let divTask = document.createElement('div');
  let color = colorName.innerText;
  let divTasks = document.querySelector('.my-tasks');

  divTask.className = 'task';
  divTask.style.backgroundColor = 'color';
  divTasks.appendChild(divTask);
}
addLeg('green');
