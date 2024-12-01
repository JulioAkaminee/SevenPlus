const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db'); 

const router = express.Router();
const secretKey = 'chave_secreta'; 

// Rota para login
router.post('/', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: 'Preencha todos os campos.' });
  }

  // Consultando o banco para encontrar o usuário com o email fornecido
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao consultar o banco de dados.' });
    }

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    const user = rows[0];

    // Comparando a senha fornecida com a senha armazenada
    bcrypt.compare(senha, user.senha, (err, senhaCorreta) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erro ao comparar as senhas.' });
      }

      if (!senhaCorreta) {
        return res.status(401).json({ error: 'Senha incorreta.' });
      }

      // Gerando o token de autenticação
      const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
        expiresIn: '3h',
      });

      return res.status(200).json({ message: 'Login realizado com sucesso!', token });
    });
  });
});

module.exports = router;
