import React from "react";
import removeCategoryFromDB from "../../helpers/removeCategoryFromDB";

const DeleteCategory = ({ text, handleCategoryRemoved, categoryObj }) => {
  const handleRemovingCategory = () => {
    removeCategoryFromDB(categoryObj.id);
    handleCategoryRemoved(text);
  };
  return <span onClick={handleRemovingCategory}>x</span>;
};

export default DeleteCategory;
