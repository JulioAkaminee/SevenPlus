
const express = require('express');
const cors = require('cors');
const db = require('./db');  
const registerRouter = require('./routes/register'); 
const loginRouter = require('./routes/login'); 
const filmesRouter = require('./routes/filmes')
const categoriasRouter = require('./routes/categorias')


const app = express();
app.use(express.json());
app.use(cors());


app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/categorias', categoriasRouter);
app.use('/movies', filmesRouter);


app.listen(3010, '0.0.0.0', () => {
  console.log('Servidor rodando na porta 3010');
});
