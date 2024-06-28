import React from "react";

function CategoryFilter({categories, handleClick, setClass}) {

  const categoryRender = categories.map((categorie, index)=>{
      return <button key={index} className={(categorie === setClass ? "selected" : "" )} categorie={categorie} onClick={()=>handleClick(categorie)}>{categorie}</button>
  })


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryRender}
    </div>
  );
}

export default CategoryFilter;
