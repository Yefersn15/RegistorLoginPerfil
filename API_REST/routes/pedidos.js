const express = require('express');
const Pedido = require('../models/Pedido');
const router = express.Router();

// Crear pedido
router.post('/', async (req, res) => {
  try {
    const pedido = new Pedido(req.body);
    await pedido.save();
    res.status(201).json(pedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos
router.get('/', async (req, res) => {
  try {
    const pedidos = await Pedido.find()
      .populate('cliente_id', 'nombre email')
      .populate('usuario_id', 'nombre')
      .populate('estado_id', 'nombre color');
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener uno
router.get('/:id', async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id)
      .populate('cliente_id', 'nombre email telefono')
      .populate('usuario_id', 'nombre')
      .populate('estado_id', 'nombre color');
    if (!pedido) return res.status(404).json({ error: 'No encontrado' });
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  try {
    const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pedido) return res.status(404).json({ error: 'No encontrado' });
    res.json(pedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    const pedido = await Pedido.findByIdAndDelete(req.params.id);
    if (!pedido) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
