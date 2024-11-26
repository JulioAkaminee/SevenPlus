
const mysql = require('mysql2/promise');

// Configuração da conexão com o banco de dados
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sevenplus'
});

//exportando modúlo
module.exports = db;
