
const mysql = require('mysql2/promise');

// Configuração da conexão com o banco de dados
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sevenplus'
});

async function testarConexao() {
  try {
    // Executando uma consulta simples para testar a conexão
    const [rows, fields] = await db.query('SELECT 1');
    console.log('Conexão bem-sucedida!', rows);  // Se conseguir executar a consulta, a conexão está OK
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  }
}

testarConexao()

//exportando modúlo
module.exports = db;
