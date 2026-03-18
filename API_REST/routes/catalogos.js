const express = require('express');
const Catalogo = require('../models/Catalogo');
const router = express.Router();

// Publicar producto en catálogo
router.post('/', async (req, res) => {
  try {
    const catalogo = new Catalogo(req.body);
    await catalogo.save();
    res.status(201).json(catalogo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los publicados
router.get('/publicados', async (req, res) => {
  try {
    const catalogos = await Catalogo.find({ publicado: true })
      .populate('producto_id', 'nombre descripcion precio stock');
    res.json(catalogos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todos
router.get('/', async (req, res) => {
  try {
    const catalogos = await Catalogo.find()
      .populate('producto_id', 'nombre descripcion precio');
    res.json(catalogos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  try {
    const catalogo = await Catalogo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!catalogo) return res.status(404).json({ error: 'No encontrado' });
    res.json(catalogo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    const catalogo = await Catalogo.findByIdAndDelete(req.params.id);
    if (!catalogo) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
