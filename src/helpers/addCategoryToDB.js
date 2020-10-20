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
  const formatedRes = res.json();
  return formatedRes;
};

export default addCategoryToDB;
