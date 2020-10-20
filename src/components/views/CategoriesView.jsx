import React from "react";
import AddCategory from "../AddCategory";
import CategoriesList from "../CategoriesList";

const CategoriesView = () => {
  return (
    <div>
      <CategoriesList />
      <AddCategory />
    </div>
  );
};

export default CategoriesView;
