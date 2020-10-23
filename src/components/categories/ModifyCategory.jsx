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
      <div className="flex items-center">
        <input
          className="inline-flex items-center justify-around content-around h-12 px-4 mr-6 font-medium tracking-wide text-white transition duration-200 bg-purple-500 rounded-lg hover:bg-purple-700  focus:outline-none my-2"
          ref={ref}
          type="text"
          value={categoryName}
          onChange={inputCategory}
          onKeyDown={handleOnKeyDown}
        />
        <svg
          onClick={() => setIsModifying(false)}
          className="w-5 h-5 text-white hover:text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    );
  } else {
    return (
      <>
        <span>{categoryName}</span>
        <span onClick={() => setIsModifying(true)}>
          <svg
            className="w-5 h-5 ml-8 hover:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </span>
      </>
    );
  }
};

export default ModifyCategory;
