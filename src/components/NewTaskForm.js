import React, {useState} from "react";

function NewTaskForm({categoryList, onTaskFormSubmit}) {

   const [input, setInput] = useState("")
   const [selectedCategory, setSelectedCategory] = useState(categoryList[0]);

   const handleChange = (event) => {
    setInput(event.target.value)
    console.log(input)
   }

   const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);

  };

   function handleSubmit(e){
    e.preventDefault()
    const newTask={
      text: input,
      category: selectedCategory,
    }
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/> 
      </label>
      <label>
        Category
        <select name="category" value={selectedCategory} onChange={handleCategoryChange}>
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
