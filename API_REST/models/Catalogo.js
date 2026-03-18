const mongoose = require('mongoose');

const CatalogoSchema = new mongoose.Schema({
  producto_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  publicado: { type: Boolean, default: false },
  imagen: { type: String } // URL
});

module.exports = mongoose.model('Catalogo', CatalogoSchema);
