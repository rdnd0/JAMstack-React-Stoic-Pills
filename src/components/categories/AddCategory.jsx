import React, { useState } from "react";
import { categoryExistsError } from "../../helpers/constants";
import addCategoryToDB from "../../helpers/addCategoryToDB";

const AddCategory = ({ categories = [], handleNewCategoryAdded }) => {
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState("");

  const handleAddingCategory = async (e) => {
    e.preventDefault();
    const inputCategoryLowerCased = categoryName.toLowerCase();
    const isCategoryAlreadyInTheList =
      categories.filter((category) => category.name === categoryName).length >
      0;
    if (isCategoryAlreadyInTheList) {
      setError(categoryExistsError);
    } else {
      await addCategoryToDB(inputCategoryLowerCased);
      handleNewCategoryAdded(inputCategoryLowerCased);
      setCategoryName("");
    }
  };

  const inputCategory = (e) => {
    setCategoryName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleAddingCategory}>
        <input
          type="text"
          onChange={inputCategory}
          value={categoryName}
          onClick={() => setError("")}
        />
        <button type="submit">submit</button>
        {error && <span>{error}</span>}
      </form>
    </div>
  );
};

export default AddCategory;
