import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {

  const [categoryClass, setCategoryClass] = useState(" ")
  const [newTaskList, setTaskList] = useState(TASKS)


  const handleClick = (cat) =>{
    console.log(cat)
    const filteredTask = TASKS.filter((task)=> task.category === cat || cat === "All")
    console.log(cat)
    setCategoryClass(cat)
    setTaskList(filteredTask)
  }

  const categoryList = CATEGORIES
  .filter(category=> category !== "All")
  .map((category, index) => {
    return <option key={index}>{category}</option>
  })

  const onTaskFormSubmit = (newTask) => {
    setTaskList([...newTaskList, newTask]);
  };


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleClick={handleClick} setClass={categoryClass} newTaskList={newTaskList}/>
      <NewTaskForm categoryList={categoryList} onTaskFormSubmit={onTaskFormSubmit} setTaskList={setTaskList}/>
      <TaskList tasks = {newTaskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
