import React, { useState, useRef, useEffect } from "react";
import editCategoryFromDB from "../../helpers/editCategoryFromDB";

const ModifyCategory = ({ text, categoryObj }) => {
  const ref = useRef(null);
  const [isModifying, setIsModifying] = useState(false);
  const [categoryName, setCategoryName] = useState(text);

  const inputCategory = (e) => {
    setCategoryName(e.target.value);
  };

  const handleOnKeyDown = async (e) => {
    const { keyCode } = e;
    if (keyCode === 27) {
      setIsModifying(false);
    } else if (keyCode === 13) {
      if (text !== categoryName) {
        await editCategoryFromDB({ categoryObj, categoryName });
        setIsModifying(false);
      }
    }
  };

  useEffect(() => {
    if (isModifying) ref.current.focus();
  }, [isModifying]);

  if (isModifying) {
    return (
      <input
        ref={ref}
        type="text"
        value={categoryName}
        onChange={inputCategory}
        onKeyDown={handleOnKeyDown}
      />
    );
  } else {
    return <span onClick={() => setIsModifying(true)}>{categoryName}</span>;
  }
};

export default ModifyCategory;
