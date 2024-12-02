// routes/movies.js
const express = require('express');
const db = require('../db'); 

const router = express.Router();


router.get('/', (req, res) => {
  const query = `
SELECT 
  movies.id, 
  movies.titulo, 
  movies.descricao, 
  movies.url_video, 
  movies.capa, 
  movies.data_lancamento, 
  GROUP_CONCAT(categories.nome) AS categorias
FROM 
  movies
  LEFT JOIN movie_categories ON movies.id = movie_categories.movie_id
  LEFT JOIN categories ON movie_categories.category_id = categories.id
GROUP BY 
  movies.id;

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
