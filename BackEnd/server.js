
const express = require('express');
const cors = require('cors');
const db = require('./db');  
const registerRouter = require('./routes/register'); 
const loginRouter = require('./routes/login'); 


const app = express();
app.use(express.json());
app.use(cors());

// Usar as rotas
app.use('/register', registerRouter);
app.use('/login', loginRouter);


// Iniciar o servidor
app.listen(3010, () => {
  console.log('Servidor rodando na porta 3008');
});
