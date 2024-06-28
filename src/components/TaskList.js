import React, { useState }from "react";
import Task from "./Task"

function TaskList({tasks}) {

  const [taskList, setTaskList] = useState(tasks)

  const handleDelete = (unTask) => {
    const updatedTasks = taskList.filter((task)=> task.text !== unTask)
    setTaskList(updatedTasks)
    console.log("help")
  }

  const taskRender = taskList.map((task, index) =>{
    return <Task key={index} text={task.text} category={task.category} handleDelete={() => handleDelete(task.text)}/>
  })

  return (
    <div className="tasks">
      {taskRender}
    </div>
  );
}

export default TaskList;
