const express = require('express');
const Abono = require('../models/Abono');
const router = express.Router();

// Crear abono
router.post('/', async (req, res) => {
  try {
    const abono = new Abono(req.body);
    await abono.save();
    res.status(201).json(abono);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener abonos de un pedido
router.get('/pedido/:pedidoId', async (req, res) => {
  try {
    const abonos = await Abono.find({ pedido_id: req.params.pedidoId })
      .populate('estado_id', 'nombre color');
    res.json(abonos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todos
router.get('/', async (req, res) => {
  try {
    const abonos = await Abono.find()
      .populate('pedido_id', 'total')
      .populate('estado_id', 'nombre color');
    res.json(abonos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener uno
router.get('/:id', async (req, res) => {
  try {
    const abono = await Abono.findById(req.params.id)
      .populate('pedido_id', 'total')
      .populate('estado_id', 'nombre color');
    if (!abono) return res.status(404).json({ error: 'No encontrado' });
    res.json(abono);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  try {
    const abono = await Abono.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!abono) return res.status(404).json({ error: 'No encontrado' });
    res.json(abono);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    const abono = await Abono.findByIdAndDelete(req.params.id);
    if (!abono) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
