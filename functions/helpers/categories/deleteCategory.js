const { categoriesTable } = require("../airtable");
const formattedReturn = require("../formattedReturn");
module.exports = async (event) => {
  try {
    const { id, ...fields } = JSON.parse(event.body);
    const deletedRecord = await categoriesTable.destroy([id]);
    return formattedReturn(200, deletedRecord);
  } catch (error) {
    console.log(error);
    return formattedReturn(500, { msg: "something went wrong" });
  }
};
