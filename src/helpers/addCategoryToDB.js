const addCategoryToDB = async (inputCategory) => {
  const res = await fetch("/api/categories", {
    method: "POST",
    body: JSON.stringify({
      name: inputCategory,
      isActive: true,
    }),
  });
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
};

export default addCategoryToDB;
