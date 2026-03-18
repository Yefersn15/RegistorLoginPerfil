const express = require('express');
const Pago = require('../models/Pago');
const router = express.Router();

// Crear pago
router.post('/', async (req, res) => {
  try {
    const pago = new Pago(req.body);
    await pago.save();
    res.status(201).json(pago);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos
router.get('/', async (req, res) => {
  try {
    const pagos = await Pago.find()
      .populate('pedido_id', 'total')
      .populate('estado_id', 'nombre color');
    res.json(pagos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener por pedido
router.get('/pedido/:pedidoId', async (req, res) => {
  try {
    const pagos = await Pago.find({ pedido_id: req.params.pedidoId })
      .populate('estado_id', 'nombre color');
    res.json(pagos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener uno
router.get('/:id', async (req, res) => {
  try {
    const pago = await Pago.findById(req.params.id)
      .populate('pedido_id', 'total')
      .populate('estado_id', 'nombre color');
    if (!pago) return res.status(404).json({ error: 'No encontrado' });
    res.json(pago);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  try {
    const pago = await Pago.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pago) return res.status(404).json({ error: 'No encontrado' });
    res.json(pago);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    const pago = await Pago.findByIdAndDelete(req.params.id);
    if (!pago) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
