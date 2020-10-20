const removeCategoryFromDB = async (id) => {
  const res = await fetch("/api/categories", {
    method: "DELETE",
    body: JSON.stringify({
      id,
    }),
  });
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
};

export default removeCategoryFromDB;
