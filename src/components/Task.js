import React from "react";

function Task({task, onClick}) {
  
  return (
    <div className="task" key={task.index}>
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={onClick}>X</button>
    </div>
  );
}

export default Task;
