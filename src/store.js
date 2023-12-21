//import taskReducer, combineReducers and createStore
import { createStore, combineReducers } from "redux";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
});

//create store

const store = createStore(rootReducer);

export default store;
