import React, { useState } from "react";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");

  const addCategory = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/categories", {
      method: "POST",
      body: JSON.stringify({ name: categoryName, isActive: true }),
    });
    if (!res.ok) {
      const message = `An error has occured: ${res.status}`;
      throw new Error(message);
    }
  };

  const inputCategory = (e) => {
    setCategoryName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={addCategory}>
        <input type="text" onChange={inputCategory} value={categoryName} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddCategory;
