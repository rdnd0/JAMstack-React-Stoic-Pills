import { useState, useEffect } from "react";

const useGetCategories = (category = "") => {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const res = await fetch("/api/categories");
    const categoriesList = await res.json();
    setCategories(categoriesList);
  };

  useEffect(() => {
    loadCategories();
  }, [category]);

  return { categories };
};

export default useGetCategories;
