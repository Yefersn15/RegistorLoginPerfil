const express = require('express');
const DireccionEnvio = require('../models/DireccionEnvio');
const router = express.Router();

// Crear dirección
router.post('/', async (req, res) => {
  try {
    const direccion = new DireccionEnvio(req.body);
    await direccion.save();
    res.status(201).json(direccion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener por cliente
router.get('/cliente/:clienteId', async (req, res) => {
  try {
    const direcciones = await DireccionEnvio.find({ cliente_id: req.params.clienteId });
    res.json(direcciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todos
router.get('/', async (req, res) => {
  try {
    const direcciones = await DireccionEnvio.find()
      .populate('cliente_id', 'nombre email');
    res.json(direcciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener uno
router.get('/:id', async (req, res) => {
  try {
    const direccion = await DireccionEnvio.findById(req.params.id)
      .populate('cliente_id', 'nombre email telefono');
    if (!direccion) return res.status(404).json({ error: 'No encontrado' });
    res.json(direccion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  try {
    const direccion = await DireccionEnvio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!direccion) return res.status(404).json({ error: 'No encontrado' });
    res.json(direccion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    const direccion = await DireccionEnvio.findByIdAndDelete(req.params.id);
    if (!direccion) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
