import React from "react";
import DeleteCategory from "./DeleteCategory";
import ModifyCategory from "./ModifyCategory";

const CategoryItem = (props) => {
  return (
    <div>
      <ModifyCategory {...props} />
      <DeleteCategory {...props} />
    </div>
  );
};

export default CategoryItem;
