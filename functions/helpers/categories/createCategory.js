const { categoriesTable } = require("../airtable");
const formattedReturn = require("../formattedReturn");
module.exports = async (event) => {
  const fields = JSON.parse(event.body);
  try {
    const createdRecord = await categoriesTable.create([{ fields }]);
    return formattedReturn(200, createdRecord);
  } catch (error) {
    console.log(error);
    return formattedReturn(500, { msg: "something went wrong" });
  }
};
