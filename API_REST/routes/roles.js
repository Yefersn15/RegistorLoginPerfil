const express = require('express');
const Rol = require('../models/Rol');
const router = express.Router();

// Crear rol
router.post('/', async (req, res) => {
  try {
    const rol = new Rol(req.body);
    await rol.save();
    res.status(201).json(rol);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos
router.get('/', async (req, res) => {
  try {
    const roles = await Rol.find();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener uno
router.get('/:id', async (req, res) => {
  try {
    const rol = await Rol.findById(req.params.id);
    if (!rol) return res.status(404).json({ error: 'No encontrado' });
    res.json(rol);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  try {
    const rol = await Rol.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!rol) return res.status(404).json({ error: 'No encontrado' });
    res.json(rol);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    const rol = await Rol.findByIdAndDelete(req.params.id);
    if (!rol) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
