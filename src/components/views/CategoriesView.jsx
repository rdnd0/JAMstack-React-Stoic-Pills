import React, { useState, useEffect } from "react";
import useGetCategories from "../../hooks/useGetCategories";
import AddCategory from "../categories/AddCategory";
import CategoriesList from "../categories/CategoriesList";

const CategoriesView = () => {
  const { categories } = useGetCategories();
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    setAllCategories(categories);
  }, [categories]);

  const handleNewCategoryAdded = (category) => {
    const optimisticUICategoryObject = {
      id: category,
      name: category,
      isActive: true,
    };
    setAllCategories((existingCategories) => [
      ...existingCategories,
      optimisticUICategoryObject,
    ]);
  };

  const handleCategoryRemoved = (categoryToBeDeletedName) => {
    setAllCategories((existingCategories) =>
      existingCategories.filter(
        (category) => category.name !== categoryToBeDeletedName
      )
    );
  };

  return (
    <div>
      <CategoriesList
        categories={allCategories}
        handleCategoryRemoved={handleCategoryRemoved}
      />
      {allCategories.length > 0 ? (
        <AddCategory
          categories={categories}
          handleNewCategoryAdded={handleNewCategoryAdded}
        />
      ) : null}
    </div>
  );
};

export default CategoriesView;
