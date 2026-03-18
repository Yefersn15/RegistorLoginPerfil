const express = require('express');
const TarifaDomicilio = require('../models/TarifaDomicilio');
const router = express.Router();

// Crear tarifa
router.post('/', async (req, res) => {
  try {
    const tarifa = new TarifaDomicilio(req.body);
    await tarifa.save();
    res.status(201).json(tarifa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todas
router.get('/', async (req, res) => {
  try {
    const tarifas = await TarifaDomicilio.find();
    res.json(tarifas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener por ciudad
router.get('/ciudad/:ciudad', async (req, res) => {
  try {
    const tarifa = await TarifaDomicilio.findOne({ 
      ciudad: req.params.ciudad, 
      estado: true 
    });
    if (!tarifa) return res.status(404).json({ error: 'Tarifa no encontrada para esta ciudad' });
    res.json(tarifa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener uno
router.get('/:id', async (req, res) => {
  try {
    const tarifa = await TarifaDomicilio.findById(req.params.id);
    if (!tarifa) return res.status(404).json({ error: 'No encontrado' });
    res.json(tarifa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  try {
    const tarifa = await TarifaDomicilio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tarifa) return res.status(404).json({ error: 'No encontrado' });
    res.json(tarifa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    const tarifa = await TarifaDomicilio.findByIdAndDelete(req.params.id);
    if (!tarifa) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
