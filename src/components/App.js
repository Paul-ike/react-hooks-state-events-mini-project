import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories] =useState(CATEGORIES)

  function addNewTask(newTask) {
    setTasks([...tasks, newTask])
  }

  function handleDeleteTask(taskName) {
    const filteredTask = tasks.filter((task) => taskName !== task.text)
    setTasks(filteredTask)
  }

  function handleCatergoryFilter(categoryName) {
    //get category name
    //filter through the tasks and return the task whose category equals the category above
    if (categoryName === 'All') {
      setTasks(TASKS)
    } else {
      const filteredByCategory = TASKS.filter((task) => task.category === categoryName)
      setTasks(filteredByCategory)
    }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} handleFilter={handleCatergoryFilter} />
      <NewTaskForm onTaskFormSubmit={addNewTask} categories={categories} />
      <TaskList tasks={tasks} handleDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
