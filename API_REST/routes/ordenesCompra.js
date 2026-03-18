const express = require('express');
const OrdenCompra = require('../models/OrdenCompra');
const router = express.Router();

// Crear orden de compra
router.post('/', async (req, res) => {
  try {
    const orden = new OrdenCompra(req.body);
    await orden.save();
    res.status(201).json(orden);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todas
router.get('/', async (req, res) => {
  try {
    const ordenes = await OrdenCompra.find()
      .populate('proveedor_id', 'nombre email')
      .populate('estado_id', 'nombre color');
    res.json(ordenes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener una
router.get('/:id', async (req, res) => {
  try {
    const orden = await OrdenCompra.findById(req.params.id)
      .populate('proveedor_id', 'nombre email telefono')
      .populate('estado_id', 'nombre color');
    if (!orden) return res.status(404).json({ error: 'No encontrado' });
    res.json(orden);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  try {
    const orden = await OrdenCompra.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!orden) return res.status(404).json({ error: 'No encontrado' });
    res.json(orden);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    const orden = await OrdenCompra.findByIdAndDelete(req.params.id);
    if (!orden) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
