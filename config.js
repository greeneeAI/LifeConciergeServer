const mysql = require("mysql");
module.exports = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"life4kalon",
  port:3306,
  database:"lifeconcierge"
});
