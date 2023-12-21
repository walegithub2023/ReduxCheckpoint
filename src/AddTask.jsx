//import React, useState, useDispatch and addTask
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./actions";

//AddTask function to add a task to the Todo list
const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      dispatch(addTask({ id: Date.now(), description: task, isDone: false }));
      setTask("");
    }
  };

  {
    /*display form for users to input task. Call the handleSubmit function when the form is submitted.*/
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="inputForTask"
        style={{
          width: "75%",
          height: "70px",
          marginRight: "10px",
          padding: "20px",
          display: "inline-block",
          border: "1px solid #aaa",
          borderRadius: "4px",
          boxSizing: "border-box",
          transition: "border-color 0.3s",
          fontSize: "150%",
        }}
      />
      <button
        type="submit"
        style={{
          width: "100px",
          height: "70px",
          border: "0px solid",
          borderRadius: "3px",
          backgroundColor: "#0d6efd",
          color: "white",
          border: "1px solid rgb(13, 110, 253)",
        }}
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
