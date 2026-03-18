const express = require('express');
const OrdenCompraDetalle = require('../models/OrdenCompraDetalle');
const router = express.Router();

// Agregar producto a la orden
router.post('/', async (req, res) => {
  try {
    const detalle = new OrdenCompraDetalle(req.body);
    await detalle.save();
    res.status(201).json(detalle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener detalles de una orden
router.get('/orden/:ordenId', async (req, res) => {
  try {
    const detalles = await OrdenCompraDetalle.find({ orden_compra_id: req.params.ordenId })
      .populate('producto_id', 'nombre precio')
      .populate('estado_id', 'nombre color');
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todos
router.get('/', async (req, res) => {
  try {
    const detalles = await OrdenCompraDetalle.find()
      .populate('orden_compra_id', 'total')
      .populate('producto_id', 'nombre precio')
      .populate('estado_id', 'nombre');
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener uno
router.get('/:id', async (req, res) => {
  try {
    const detalle = await OrdenCompraDetalle.findById(req.params.id)
      .populate('producto_id', 'nombre precio stock')
      .populate('estado_id', 'nombre color');
    if (!detalle) return res.status(404).json({ error: 'No encontrado' });
    res.json(detalle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  try {
    const detalle = await OrdenCompraDetalle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!detalle) return res.status(404).json({ error: 'No encontrado' });
    res.json(detalle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    const detalle = await OrdenCompraDetalle.findByIdAndDelete(req.params.id);
    if (!detalle) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
