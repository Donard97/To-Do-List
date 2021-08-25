import './style.css';
import completedStatus from './script';

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

    const eachTask = document.createElement('div');
    eachTask.className = 'eachTask';

    const list = document.createElement('div');
    list.className = 'group-list';

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'check-box');
    if (each.completed) {
      input.checked = true;
      input.id = each.id;
      input.checked = each.completed;
      input.addEventListener('change', () => {
        completedStatus(each, taskList);
      });
      localStorage.setItem('taskList', JSON.stringify(taskList));
    } else {
      input.id = each.id;
      input.checked = each.completed;
      input.addEventListener('change', () => {
        completedStatus(each, taskList);
      });
      localStorage.setItem('taskList', JSON.stringify(taskList));
    }

    list.appendChild(input);

    const label = document.createElement('label');
    label.innerHTML = `${each.description}`;
    label.className = 'form-label';
    list.appendChild(label);

    eachTask.appendChild(list);

    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-ellipsis-v">';
    button.className = 'menu-icon';
    eachTask.appendChild(button);

    allTasks.appendChild(eachTask);
  }
};

window.onload = displayTasks();