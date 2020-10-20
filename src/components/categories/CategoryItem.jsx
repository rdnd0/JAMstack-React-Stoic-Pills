import React from "react";
import DeleteCategory from "./DeleteCategory";

const CategoryItem = (props) => {
  const { text = "" } = props;
  return (
    <div>
      <span>{text}</span>
      <DeleteCategory {...props} />
    </div>
  );
};

export default CategoryItem;
