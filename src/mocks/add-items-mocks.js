import localStorageMock from './local-storage-mock';

const addTaskList = (taskList, item) => {
  taskList.push({
    description: item,
    id: taskList.length + 1,
    completed: false,
  });
  localStorageMock.setItem('taskList', taskList);
  return taskList;
};

export default addTaskList;