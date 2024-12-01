// server.js
const express = require('express');
const cors = require('cors');
const db = require('./db');  // Conexão com o banco de dados
const registerRouter = require('./routes/register');  // Rota de registro
const loginRouter = require('./routes/login');  // Rota de login
const filmesRouter = require('./routes/filmes')
const app = express();

// Middleware para o corpo da requisição (JSON)
app.use(express.json());

// Middleware de CORS para permitir requisições de diferentes origens
app.use(cors());

// Roteamento das URLs
app.use('/register', registerRouter);  // Rota de registro de usuário
app.use('/login', loginRouter);  // Rota de login de usuário
app.use('/api/filmes', filmesRouter);


// Iniciar o servidor na porta 3010
app.listen(3010, '0.0.0.0', () => {
  console.log('Servidor rodando na porta 3010');
});
