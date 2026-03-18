const express = require('express');
const Domicilio = require('../models/Domicilio');
const router = express.Router();

// Crear domicilio
router.post('/', async (req, res) => {
  try {
    const domicilio = new Domicilio(req.body);
    await domicilio.save();
    res.status(201).json(domicilio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos
router.get('/', async (req, res) => {
  try {
    const domicilios = await Domicilio.find()
      .populate('pedido_id', 'total fecha_pedido')
      .populate('direccion_id', 'direccion ciudad')
      .populate('estado_id', 'nombre color')
      .populate('tarifa_id', 'ciudad tarifa');
    res.json(domicilios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener por pedido
router.get('/pedido/:pedidoId', async (req, res) => {
  try {
    const domicilio = await Domicilio.findOne({ pedido_id: req.params.pedidoId })
      .populate('direccion_id', 'direccion ciudad')
      .populate('estado_id', 'nombre color')
      .populate('tarifa_id', 'ciudad tarifa');
    res.json(domicilio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener uno
router.get('/:id', async (req, res) => {
  try {
    const domicilio = await Domicilio.findById(req.params.id)
      .populate('pedido_id', 'total fecha_pedido')
      .populate('direccion_id', 'direccion ciudad')
      .populate('estado_id', 'nombre color')
      .populate('tarifa_id', 'ciudad tarifa');
    if (!domicilio) return res.status(404).json({ error: 'No encontrado' });
    res.json(domicilio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  try {
    const domicilio = await Domicilio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!domicilio) return res.status(404).json({ error: 'No encontrado' });
    res.json(domicilio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    const domicilio = await Domicilio.findByIdAndDelete(req.params.id);
    if (!domicilio) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
