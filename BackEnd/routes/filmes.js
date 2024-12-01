// routes/movies.js
const express = require('express');
const db = require('../db'); 

const router = express.Router();

// Rota para listar filmes
router.get('/', (req, res) => {
  const query = `
    SELECT 
      m.id, 
      m.titulo, 
      m.descricao, 
      m.url_video, 
      m.capa, 
      m.data_lancamento, 
      c.nome AS categoria
    FROM movies m
    LEFT JOIN movie_categories mc ON m.id = mc.movie_id
    LEFT JOIN categories c ON mc.category_id = c.id;
  `;
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao consultar os filmes:', err);
      return res.status(500).json({ error: 'Erro ao consultar os filmes' });
    }
    res.json(results);
  });
});

module.exports = router;
