const { pillsTable } = require("../airtable");
const formattedReturn = require("../formattedReturn");
module.exports = async (event) => {
  try {
    const pills = await pillsTable.select().firstPage();
    const formattedPills = pills.map((pill) => ({
      id: pill.id,
      ...pill.fields,
    }));
    return formattedReturn(200, formattedPills);
  } catch (error) {
    console.log(error);
    return formattedReturn(500, { msg: "something went wrong" });
  }
};
