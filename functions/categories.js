const formattedReturn = require("./helpers/formattedReturn");
const getCategories = require("./helpers/categories/getCategories");
const createCategory = require("./helpers/categories/createCategory");
const deleteCategory = require("./helpers/categories/deleteCategory");
const editCategory = require("./helpers/categories/editCategory");

exports.handler = async (event) => {
  if (event.httpMethod === "GET") {
    return await getCategories(event);
  } else if (event.httpMethod === "POST") {
    return await createCategory(event);
  } else if (event.httpMethod === "PUT") {
    return await editCategory(event);
  } else if (event.httpMethod === "DELETE") {
    return await deleteCategory(event);
  } else {
    return formattedReturn(405, {});
  }
};
