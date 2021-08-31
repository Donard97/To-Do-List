import localStorageMock from './local-storage-mock';

const edit = (newValue, listTask, i) => {
  listTask[i].description = newValue;
  localStorageMock.setItem('listTask', listTask);
  return listTask;
};

export default edit;
