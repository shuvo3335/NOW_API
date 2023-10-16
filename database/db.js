// db.js
const ibmdb = require('ibm_db');
const dotenv = require('dotenv');

dotenv.config();

const connString = `DRIVER={DB2};DATABASE=${process.env.DB_NAME};UID=${process.env.DB_USER};PWD=${process.env.DB_PASSWORD};HOSTNAME=${process.env.DB_HOST};port=${process.env.DB_PORT}`;

function executeQuery(query, params = []) {
  return new Promise((resolve, reject) => {
    ibmdb.open(connString, (err, conn) => {
      if (err) {
        reject(err);
        return;
      }

      conn.query(query, params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }

        conn.close(() => {});
      });
    });
  });
}

module.exports = { executeQuery };
