const express = require('express');
const PedidoProducto = require('../models/PedidoProducto');
const router = express.Router();

// Agregar producto al pedido
router.post('/', async (req, res) => {
  try {
    const pedidoProducto = new PedidoProducto(req.body);
    await pedidoProducto.save();
    res.status(201).json(pedidoProducto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener productos de un pedido
router.get('/pedido/:pedidoId', async (req, res) => {
  try {
    const productos = await PedidoProducto.find({ pedido_id: req.params.pedidoId })
      .populate('producto_id', 'nombre precio')
      .populate('estado_id', 'nombre color');
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todos
router.get('/', async (req, res) => {
  try {
    const pedidoProductos = await PedidoProducto.find()
      .populate('pedido_id', 'total')
      .populate('producto_id', 'nombre precio')
      .populate('estado_id', 'nombre');
    res.json(pedidoProductos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener uno
router.get('/:id', async (req, res) => {
  try {
    const pedidoProducto = await PedidoProducto.findById(req.params.id)
      .populate('producto_id', 'nombre precio stock')
      .populate('estado_id', 'nombre color');
    if (!pedidoProducto) return res.status(404).json({ error: 'No encontrado' });
    res.json(pedidoProducto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar cantidad
router.put('/:id', async (req, res) => {
  try {
    const pedidoProducto = await PedidoProducto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pedidoProducto) return res.status(404).json({ error: 'No encontrado' });
    res.json(pedidoProducto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar producto del pedido
router.delete('/:id', async (req, res) => {
  try {
    const pedidoProducto = await PedidoProducto.findByIdAndDelete(req.params.id);
    if (!pedidoProducto) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
