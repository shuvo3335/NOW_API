// controllers/dataController.js
const db = require('../database/db');

async function getData(req, res) {
  try {
    const query = 
    `SELECT LAYDOWNPROGRESSNUMBER,COMPANYCODE FROM LAYDOWNPROGRESS`;
    const data = await db.executeQuery(query);
    res.json(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
}

module.exports = { getData };