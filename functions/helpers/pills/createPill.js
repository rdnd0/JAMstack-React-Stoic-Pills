const { pillsTable } = require("../airtable");
const formattedReturn = require("../formattedReturn");
module.exports = async (event) => {
  try {
    confields = JSON.parse(event.body);
    const createdRecord = await pillsTable.create([{ fields }]);
    return formattedReturn(200, createdRecord);
  } catch (error) {
    console.log(error);
    return formattedReturn(500, { msg: "something went wrong" });
  }
};
