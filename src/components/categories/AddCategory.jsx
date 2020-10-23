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
      const categoryAdded = await addCategoryToDB(inputCategoryLowerCased);
      const { id, fields } = categoryAdded[0];
      handleNewCategoryAdded(id, fields);
      setCategoryName("");
    }
  };

  const inputCategory = (e) => {
    setCategoryName(e.target.value);
  };

  return (
    <div className="flex justify-center rounded-lg border overflow-hidden lg:flex-row ">
      <form onSubmit={handleAddingCategory} className="py-8">
        <input
          className="py-3 px-6 bg-white text-gray-700 outline-none placeholder-gray-500 focus:placeholder-transparent"
          type="text"
          name="email"
          placeholder="Add new category"
          aria-label="Add new category"
          onChange={inputCategory}
          value={categoryName}
          onClick={() => setError("")}
        />
        <button
          className="py-3 px-4  text-sm font-semibold uppercase text-white transition duration-200 bg-purple-500 rounded-lg hover:bg-purple-700 focus:outline-none"
          type="submit"
        >
          Add
        </button>
        {error && <span>{error}</span>}
      </form>
    </div>
  );
};

export default AddCategory;
