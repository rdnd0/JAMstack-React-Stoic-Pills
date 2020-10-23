import React from "react";
import DeleteCategory from "./DeleteCategory";
import ModifyCategory from "./ModifyCategory";

const CategoryItem = (props) => {
  return (
    <div className="inline-flex items-center justify-around content-around h-12 px-4 mr-6 font-medium tracking-wide text-white transition duration-200 bg-purple-500 rounded-lg hover:bg-purple-700 focus:shadow-outline focus:outline-none my-2 cursor-pointer">
      <ModifyCategory {...props} />
      <DeleteCategory {...props} />
    </div>
  );
};

export default CategoryItem;
