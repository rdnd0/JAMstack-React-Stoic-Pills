import React, { useState, useEffect } from "react";
import useGetCategories from "../../hooks/useGetCategories";
import AddCategory from "../categories/AddCategory";
import CategoriesList from "../categories/CategoriesList";

const imgStyle = {
  backgroundImage: "url(Epictetus.jpg)",
  height: "50vw",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const CategoriesView = () => {
  const { categories } = useGetCategories();
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    setAllCategories(categories);
  }, [categories]);

  const handleNewCategoryAdded = (id, fields) => {
    const optimisticUICategoryObject = {
      id,
      ...fields,
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
    <>
      <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-6xl md:px-24 lg:px-8 lg:py-16">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded-lg shadow-xl lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <div
              className=" w-full lg:absolute h-80 lg:h-full"
              style={imgStyle}
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"></polygon>
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              Stoicism at your fingertips
            </h5>
            <p className="py-5 mb-5 text-gray-800">
              <span className="font-bold">Choose</span> a category to start
            </p>
            <CategoriesList
              categories={allCategories}
              handleCategoryRemoved={handleCategoryRemoved}
            />
          </div>
        </div>
        {allCategories.length > 0 ? (
          <AddCategory
            categories={categories}
            handleNewCategoryAdded={handleNewCategoryAdded}
          />
        ) : null}
      </div>
    </>
  );
};

export default CategoriesView;
