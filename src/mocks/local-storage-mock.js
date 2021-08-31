const listTask = [];
const localStorageMock = {
  getItem: (key) => listTask[key] || null,
  setItem: (key, value) => {
    listTask[key] = value;
  },
};

export default localStorageMock;