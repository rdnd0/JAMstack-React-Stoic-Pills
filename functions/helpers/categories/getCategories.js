const { categoriesTable } = require("../airtable");
const formattedReturn = require("../formattedReturn");
module.exports = async (event) => {
  try {
    const categories = await categoriesTable.select().firstPage();
    const formattedCategories = categories.map((category) => ({
      id: category.id,
      ...category.fields,
    }));
    return formattedReturn(200, formattedCategories);
  } catch (error) {
    console.log(error);
    return formattedReturn(500, { msg: "something went wrong" });
  }
};
