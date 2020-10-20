const editCategoryFromDB = async ({ categoryObj, categoryName }) => {
  const res = await fetch("/api/categories", {
    method: "PUT",
    body: JSON.stringify({
      ...categoryObj,
      name: categoryName,
    }),
  });
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
};

export default editCategoryFromDB;
