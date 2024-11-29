const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');  

const router = express.Router();

// Rota para registrar um usuário
router.post('/', async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'Preencha todos os campos.' });
  }

  try {
    // Verificando se o usuário já existe
    const [rows] = await db.query('SELECT id FROM users WHERE email = ?', [email]);
    if (rows.length > 0) {
      return res.status(409).json({ error: 'Usuário já existe.' });
    }

    // Criptografando a senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Inserindo o novo usuário no banco de dados
    await db.query('INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)', [nome, email, hashedPassword]);

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao registrar usuário.' });
  }
});

module.exports = router;
