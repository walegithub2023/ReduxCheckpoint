//import React, useSelector, useDispatch, setFilter and Task
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "./actions";
import Task from "./Task";

{
  /*create the ListTask function for task filtering based on "done", "not done"  or "all" tasks */
}
const ListTask = () => {
  const tasks = useSelector((state) => {
    switch (state.tasks.filter) {
      case "done":
        return state.tasks.tasks.filter((task) => task.isDone);
      case "not-done":
        return state.tasks.tasks.filter((task) => !task.isDone);
      default:
        return state.tasks.tasks;
    }
  });

  const dispatch = useDispatch();

  return (
    <div>
      <div style={{ border: "1px solid #ccc", padding: "15px" }}>
        {/*  A button to trigger or change state for all tasks (done and not done tasks) to be displayed*/}
        <button
          onClick={() => dispatch(setFilter("all"))}
          style={{
            width: "120px",
            padding: "15px",
            border: "0px",
            marginRight: "10px",
            backgroundColor: "rgb(13, 110, 253)",
            color: "white",
            borderRadius: "3px",
          }}
        >
          All
        </button>

        {/*  A button to trigger or change state for all done tasks to be displayed */}
        <button
          onClick={() => dispatch(setFilter("done"))}
          style={{
            width: "120px",
            padding: "15px",
            border: "0px",
            marginRight: "10px",
            backgroundColor: "rgb(13, 110, 253)",
            color: "white",
            borderRadius: "3px",
          }}
        >
          Done
        </button>

        {/*   A button to trigger or change state for all tasks not done to be displayed */}
        <button
          onClick={() => dispatch(setFilter("not-done"))}
          style={{
            width: "120px",
            padding: "15px",
            border: "0px",
            marginRight: "10px",
            backgroundColor: "rgb(13, 110, 253)",
            color: "white",
            borderRadius: "3px",
          }}
        >
          Not Done
        </button>
      </div>

      {/* 
An unorderlist to house the displayed lists */}
      <ul
        style={{
          listStyleType: "none",
          fontSize: "150%",
          marginTop: "50px",
          fontFamily: "arial",
          margin: "50px auto",
        }}
      >
        {/*  map out tasks and render Task component */}
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
