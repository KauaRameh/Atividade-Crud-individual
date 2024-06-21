const express = require('express');
const router = express.Router();
const Atividade = require('../models/atividade');
const AtividadeRoutes = express.Router()

// Rota para criar uma nova atividade
router.post('/', async (req, res) => {
    try {
        const novaAtividade = await Atividade.create(req.body);
        res.status(201).json(novaAtividade);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Rota para listar todas as atividades
router.get('/', async (req, res) => {
    try {
        const atividades = await Atividade.find();
        res.json(atividades);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Rota para buscar uma atividade por ID
router.get('/:id', async (req, res) => {
    try {
        const atividade = await Atividade.findById(req.params.id);
        if (!atividade) {
            return res.status(404).json({ message: 'Atividade não encontrada' });
        }
        res.json(atividade);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Rota para atualizar uma atividade por ID
router.put('/:id', async (req, res) => {
    try {
        const atividade = await Atividade.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!atividade) {
            return res.status(404).json({ message: 'Atividade não encontrada para atualização' });
        }
        res.json(atividade);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Rota para deletar uma atividade por ID
router.delete('/:id', async (req, res) => {
    try {
        const atividade = await Atividade.findByIdAndDelete(req.params.id);
        if (!atividade) {
            return res.status(404).json({ message: 'Atividade não encontrada para exclusão' });
        }
        res.json({ message: 'Atividade deletada com sucesso' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
