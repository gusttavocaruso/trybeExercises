const buttonCreateTask = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const clearButton = document.querySelector('#apaga-tudo');
const clearFinishedButton = document.querySelector('#remover-finalizados');

buttonCreateTask.addEventListener('click', function createTask() {
  const task = document.querySelector('#texto-tarefa');
  const taskText = document.querySelector('#texto-tarefa').value;
  const li = document.createElement('li');
  li.className = 'liTask';
  li.innerHTML = taskText;
  ol.appendChild(li);
  task.value = '';
  li.addEventListener('click', function taskSelect(event) {
    const allLi = document.querySelectorAll('.liTask');
    for (let i = 0; i < allLi.length; i += 1) {
      allLi[i].removeAttribute('id');
    }
    event.target.id = 'selected-task';
  });
  li.addEventListener('dblclick', function taskFinished(event) {
    event.target.classList.toggle('completed'); 
  });
});

clearButton.addEventListener('click', function clearAllTasks() {
  const li = document.querySelectorAll('.liTask');
  for (let j = 0; j < li.length; j += 1) {
    ol.removeChild(li[j]);
  }
});

clearFinishedButton.addEventListener('click', function clearFinishedOnes() {
  const finishedTasks = document.querySelectorAll('.completed');
  for (let g = 0; g < finishedTasks.length; g += 1) {
    ol.removeChild(finishedTasks[g]);
  }
});
