import './style.css';

const allTasks = document.getElementById('all-tasks');

const taskList = [
  {
    description: 'Get up at 8 am',
    completed: false,
    id: 0,
  },
  {
    description: 'Start working at 9 am',
    completed: false,
    id: 1,
  },
  {
    description: 'Drink coffe at 9:30',
    completed: false,
    id: 2,
  },
];

const displayTasks = () => {
  allTasks.innerHTML = '';
  for (let i = 0; i < taskList.length; i += 1) {
    const each = taskList[i];
    const list = `<div class="eachTask">
      <div class="group-list">
      <input type="checkbox" class="box" id="list-box" name="list-box">
        <p class="task-name">${each.description}</p>
      </div> 
      <button class="menu-icon" id="${each.id}"><i class="fas fa-ellipsis-v"></i></button>
    </div>
    <hr>`;
    allTasks.innerHTML += list;
  }
};

window.onload = displayTasks();