import React from "react";
import CategoryItem from "./CategoryItem";

function CategoriesList({ categories = [] }) {
  return (
    <div>
      <header>Stoic categories</header>
      {categories.map((category) => {
        if (category.isActive) {
          return (
            <div key={category.id}>
              <CategoryItem text={category.name} />
            </div>
          );
        }
      })}
    </div>
  );
}

export default CategoriesList;
