const express = require('express');
const Estado = require('../models/Estado');
const router = express.Router();

// Crear estado
router.post('/', async (req, res) => {
  try {
    const estado = new Estado(req.body);
    await estado.save();
    res.status(201).json(estado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos
router.get('/', async (req, res) => {
  try {
    const estados = await Estado.find();
    res.json(estados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener uno
router.get('/:id', async (req, res) => {
  try {
    const estado = await Estado.findById(req.params.id);
    if (!estado) return res.status(404).json({ error: 'No encontrado' });
    res.json(estado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener por tipo
router.get('/tipo/:tipo', async (req, res) => {
  try {
    const estados = await Estado.find({ tipo: req.params.tipo }).sort({ orden: 1 });
    res.json(estados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  try {
    const estado = await Estado.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!estado) return res.status(404).json({ error: 'No encontrado' });
    res.json(estado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    const estado = await Estado.findByIdAndDelete(req.params.id);
    if (!estado) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
