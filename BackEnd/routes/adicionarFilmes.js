const express = require('express');
const db = require('../db'); 

const router = express.Router();

// Rota para buscar categorias
router.get('/categorias', (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
        if (err) {
            console.error('Erro ao buscar categorias:', err);
            return res.status(500).send({ error: 'Erro interno ao buscar categorias.' });
        }
        res.json(results);
    });
});

// Rota para cadastrar filmes
router.post('/', (req, res) => {
    const { titulo, descricao, url_video, capa, data_lancamento, categorias } = req.body;

    // Validação de dados recebidos
    if (!titulo || !descricao || !url_video || !capa || !data_lancamento || !Array.isArray(categorias)) {
        return res.status(400).send({ error: 'Todos os campos são obrigatórios e categorias devem ser um array.' });
    }

    // Inserir filme na tabela `movies`
    const sql = 'INSERT INTO movies (titulo, descricao, url_video, capa, data_lancamento) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [titulo, descricao, url_video, capa, data_lancamento], (err, result) => {
        if (err) {
            console.error('Erro ao inserir filme:', err);
            return res.status(500).send({ error: 'Erro ao salvar o filme no banco de dados.' });
        }

        const movieId = result.insertId;

        // Relacionar filme às categorias
        const categoryQueries = categorias.map(catId => {
            return new Promise((resolve, reject) => {
                db.query(
                    'INSERT INTO movie_categories (movie_id, category_id) VALUES (?, ?)',
                    [movieId, catId],
                    (err) => (err ? reject(err) : resolve())
                );
            });
        });

        Promise.all(categoryQueries)
            .then(() => {
                res.status(201).send({ id: movieId, message: 'Filme cadastrado com sucesso!' });
            })
            .catch(err => {
                console.error('Erro ao associar categorias:', err);
                res.status(500).send({ error: 'Erro ao associar categorias ao filme.' });
            });
    });
});

module.exports = router;
