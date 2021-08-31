import localStorageMock from '../mocks/local-storage-mock';
import { removeTask, removeCompleted } from '../mocks/remove-items-mocks';

describe('Delete One Task', () => {
  const listTask = [
    {
      id: 0,
      description: 'Get up at 8 am',
      completed: false,
    },
    {
      id: 1,
      description: 'Drink coffe 8 am',
      completed: true,
    },
    {
      id: 2,
      description: 'Start Microverse at 9 am',
      completed: false,
    },
  ];

  it('delete one task', () => {
    expect(removeTask(listTask, 1)).toHaveLength(2);
  });

  it('Update local Storage length after deleting', () => {
    expect(localStorageMock.getItem('taskList')).toHaveLength(2);
  });

  it('Update local storage after deleting an item', () => {
    expect(localStorageMock.getItem('taskList')).toBe(listTask);
  });

  it('Update index after deleting a task', () => {
    expect(listTask[1].id).toBe(2);
  });

  it('Return updated array', () => {
    expect(removeTask(listTask, 0)).toEqual([{ completed: false, description: 'Start Microverse at 9 am', id: 1 }]);
  });
});

describe('Delete All Completed', () => {
  const linkTask = [
    {
      id: 1,
      description: 'Task 1',
      completed: false,
    },
    {
      id: 2,
      description: 'Task 2',
      completed: true,
    },
    {
      id: 3,
      description: 'Task 3',
      completed: true,
    },
    {
      id: 4,
      description: 'Task 4',
      completed: false,
    },
  ];

  it('Delete completed tasks', () => {
    expect(removeCompleted(linkTask)).toHaveLength(2);
  });

  it('Update local storage after deleting', () => {
    expect(localStorageMock.getItem('taskList')[1].description).toBe('Task 4');
  });

  it('Update local storage after deleting', () => {
    expect(localStorageMock.getItem('taskList')[1].id).toBe(2);
  });

  it('Index of task 0 should be 1', () => {
    expect(removeCompleted(linkTask)[0].id).toBe(1);
  });
});
