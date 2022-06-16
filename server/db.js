const mysql = require("mysql2");
  
//создаем подключение к базе, используем promise
const connection = mysql.createConnection({
  host: "localhost", 
  user: "root",
  database: "products_db",
  password: "123"
}).promise();

 module.exports = connection