import localStorageMock from '../mocks/local-storage-mock';
import edit from '../mocks/edit-mock';

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
  it('Edit value at id 1', () => {
    expect(edit('Hello', listTask, 1)).toEqual(
      [{ id: 0, description: 'Get up at 8 am', completed: false },
        { id: 1, description: 'Hello', completed: true },
        { id: 2, description: 'Start Microverse at 9 am', completed: false }],
    );
  });

  it('Get value from local storage', () => {
    expect(localStorageMock.getItem('listTask')[1].description).toBe('Hello');
  });
});