import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete}) {

  const taskList = tasks.map((task, index) => (
    <Task key={index} task={task} onClick={() => handleDelete(task.text)} />
  ))
  
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
