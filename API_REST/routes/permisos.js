const express = require('express');
const Permiso = require('../models/Permiso');
const router = express.Router();

// Crear permiso
router.post('/', async (req, res) => {
  try {
    const permiso = new Permiso(req.body);
    await permiso.save();
    res.status(201).json(permiso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos
router.get('/', async (req, res) => {
  try {
    const permisos = await Permiso.find();
    res.json(permisos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener uno
router.get('/:id', async (req, res) => {
  try {
    const permiso = await Permiso.findById(req.params.id);
    if (!permiso) return res.status(404).json({ error: 'No encontrado' });
    res.json(permiso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  try {
    const permiso = await Permiso.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!permiso) return res.status(404).json({ error: 'No encontrado' });
    res.json(permiso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    const permiso = await Permiso.findByIdAndDelete(req.params.id);
    if (!permiso) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
