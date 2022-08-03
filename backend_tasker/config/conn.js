var mysql = require("mysql");
require('dotenv').config();

var connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.form,
});

connection.connect(function (err) {
  if (err) {
    console.log("error occured while connecting");
  } else {
    console.log("connection created with Mysql successfully");
  }
});

module.exports = { connection };
