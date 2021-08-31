import localStorageMock from '../mocks/local-storage-mock';
import removeTask from '../mocks/remove-items-mocks';

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
