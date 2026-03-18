const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  categoria_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' },
  proveedor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Proveedor' },
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  estado: { type: Boolean, default: true }
});

module.exports = mongoose.model('Producto', ProductoSchema);
