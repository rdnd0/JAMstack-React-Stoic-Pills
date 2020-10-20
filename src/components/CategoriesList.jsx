import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";

function CategoriesList() {
  const [categories, setCategories] = useState([]);
  const loadCategories = async () => {
    const res = await fetch("/api/categories");
    const categoriesList = await res.json();
    setCategories(categoriesList);
  };
  useEffect(() => {
    loadCategories();
  }, []);

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
