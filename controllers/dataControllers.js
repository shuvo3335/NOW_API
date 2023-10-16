// controllers/dataController.js
const db = require('../database/db');

async function getData(req, res) {
  try {
    const query = 
    `SELECT COMPANYCODE,COUNTERCODE,CODE,ORDERTYPE,ONORDERTOTALAMOUNT,ORDERCATEGORYCODE,ORDERDATE,DIVISIONCODE FROM SALESORDER`; // Update with your table name
    const data = await db.executeQuery(query);
    res.json(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
}

module.exports = { getData };
