const mysql = require('mysql2');

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sevenplus'
});

function testarConexao() {
  db.query('SELECT 1', function (err, rows, fields) {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
    } else {
      console.log('Conexão bem-sucedida!', rows); // Se conseguir executar a consulta, a conexão está OK
    }
  });
}

testarConexao();

// Exportando módulo
module.exports = db;
