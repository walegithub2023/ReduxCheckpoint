const initialState = {
  tasks: [],
  filter: "all",
};

{
  /*task reducer function*/
}
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
