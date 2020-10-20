const { pillsTable } = require("../airtable");
const formattedReturn = require("../formattedReturn");
module.exports = async (event) => {
  try {
    const { id, ...fields } = JSON.parse(event.body);
    const updatedRecord = await pillsTable.update([{ id, fields }]);
    return formattedReturn(200, updatedRecord);
  } catch (error) {
    console.log(error);
    return formattedReturn(500, { msg: "something went wrong" });
  }
};
