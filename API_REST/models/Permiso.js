const mongoose = require('mongoose');

const PermisoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  descripcion: { type: String },
  modulo: { type: String },
  estado: { type: Boolean, default: true }
});

module.exports = mongoose.model('Permiso', PermisoSchema);
