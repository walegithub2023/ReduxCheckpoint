//import React useDispatch and toggleTask
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask } from "./actions";

//Task function to display each Todo task as a list item
const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        textAlign: "justify",
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "3px",
        marginTop: "10px",
      }}
    >
      {/*Add a checkbox to every Todo task displayed*/}
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
        style={{ marginRight: "10px" }}
      />
      <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
        {task.description}
      </span>
    </li>
  );
};

export default Task;
