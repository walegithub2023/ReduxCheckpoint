//create addTask, toggleTask and setFilter functions to carry out respective actions.
export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const toggleTask = (taskId) => ({
  type: "TOGGLE_TASK",
  payload: taskId,
});

export const setFilter = (filter) => ({
  type: "SET_FILTER",
  payload: filter,
});
