import addTasklist from '../mocks/add-items-mocks';
import localStorageMock from '../mocks/local-storage-mock';

describe('Add-Tasks', () => {
  const listTask = [];
  const item = 'Get up at 8 am';
  it('add-Tasks', () => {
    expect(addTasklist(listTask, item)).toHaveLength(1);
  });

  it('Update local storage after new item', () => {
    expect(localStorageMock.getItem('taskList')).toHaveLength(1);
  });

  it('Should return task array with task object', () => {
    expect(addTasklist(listTask, item)).toHaveLength(2);
  });

  it('Description should match input value - insert ', () => {
    expect(listTask[0].description).toBe('Get up at 8 am');
  });

  it('Completed status should be false', () => {
    expect(listTask[0].completed).toBe(false);
  });

  it('Status should be false', () => {
    expect(listTask[0].id).toBe(1);
  });

  it('add-Tasks', () => {
    expect(listTask[0]).toEqual({ description: 'Get up at 8 am', completed: false, id: 1 });
  });
});