import React, { useState } from "react";

function CategoryFilter({categories, handleFilter}) {
  const [selectedBtn, setSelectedBtn] = useState("All")

  const handleClick = (categoryName) => {
    handleFilter(categoryName)
    setSelectedBtn(categoryName)
  }

  const buttonElements = categories.map((category, index) => (
    <button className={ selectedBtn===category ? "selected" : "" } key={index} onClick={() => handleClick(category)}>{category}</button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonElements}
    </div>
  );
}

export default CategoryFilter;
