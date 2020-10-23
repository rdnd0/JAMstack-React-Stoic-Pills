import React from "react";
import CategoryItem from "./CategoryItem";

function CategoriesList({ categories = [], handleCategoryRemoved }) {
  return (
    <div>
      <div className="flex items-center flex-wrap">
        {categories.map((category) => {
          if (category.isActive) {
            return (
              <div key={category.id}>
                <CategoryItem
                  text={category.name}
                  categoryObj={category}
                  handleCategoryRemoved={handleCategoryRemoved}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default CategoriesList;
