const formattedReturn = require("./helpers/formattedReturn");
const getPills = require("./helpers/pills/getPills");
const createPill = require("./helpers/pills/createPill");
const deletePill = require("./helpers/pills/deletePill");
const editPill = require("./helpers/pills/editPill");

exports.handler = async (event) => {
  if (event.httpMethod === "GET") {
    return await getPills(event);
  } else if (event.httpMethod === "POST") {
    return await createPill(event);
  } else if (event.httpMethod === "PUT") {
    return await editPill(event);
  } else if (event.httpMethod === "DELETE") {
    return await deletePill(event);
  } else {
    return formattedReturn(405, {});
  }
};
