const db = require('../db');
const express = require('express');
const router = express.Router();

// Rota para listar as categorias
router.get('/', async (req, res) => {
  const querySelectCategories = 'SELECT * FROM categories';

  try {
    // Usando o cliente com promessas (await) para executar a consulta
    const [results] = await db.execute(querySelectCategories);

    res.status(200).json(results);
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao listar as categorias.', message: err.message });
  }
});

module.exports = router;
