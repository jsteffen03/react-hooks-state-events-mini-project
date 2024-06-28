import React from "react";
import Task from "./Task"

function TaskList({tasks, setTaskList}) {

  const handleDelete = (unTask) => {
    console.log(unTask)
    const updatedTasks = tasks.filter((task)=> task.text !== unTask)
    setTaskList(updatedTasks)
  }



  const taskRender = tasks.map((task, index) =>{
    return <Task key={index} text={task.text} category={task.category} handleDelete={() => handleDelete(task.text)}/>
  })

  return (
    <div className="tasks">
      {taskRender}
    </div>
  );
}

export default TaskList;
