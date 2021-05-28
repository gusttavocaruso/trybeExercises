function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
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

  if (x === 24 || x === 25 | x === 31) {
    liDays.className = 'day';
  } else if (x === 4 || x === 11 || x === 18 || i === 25 || x === 31) {
    liDays.className = 'day friday';
  }  else {
    liDays.className = 'day holiday';
  }

  liDays.innerText = x;
}