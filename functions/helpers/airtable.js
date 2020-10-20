// Airtable configuration
require("dotenv").config();
const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);
const pillsTable = base(process.env.AIRTABLE_TABLE_NAME_PILLS);
const categoriesTable = base(process.env.AIRTABLE_TABLE_NAME_CATEGORIES);

module.exports = { pillsTable, categoriesTable };
