// src/components/CategoryFilter.js
import React from "react";

const CategoryFilter = ({ selectedCategory, setCategory }) => {
  return (
    <div className="category-filter">
      <button onClick={() => setCategory("Todos")}>Todos</button>
      <button onClick={() => setCategory("Feminino")}>Feminino</button>
      <button onClick={() => setCategory("Masculino")}>Masculino</button>
    </div>
  );
};

export default CategoryFilter;
