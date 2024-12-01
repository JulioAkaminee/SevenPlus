const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');  

const router = express.Router();


router.post('/', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'Preencha todos os campos.' });
  }


  db.query('SELECT id FROM users WHERE email = ?', [email], (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao verificar usuário.' });
    }

    if (rows.length > 0) {
      return res.status(409).json({ error: 'Usuário já existe.' });
    }


    bcrypt.hash(senha, 10, (err, hashedPassword) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erro ao criptografar a senha.' });
      }

     
      db.query('INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)', [nome, email, hashedPassword], (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Erro ao registrar usuário.' });
        }

        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
      });
    });
  });
});

module.exports = router;
