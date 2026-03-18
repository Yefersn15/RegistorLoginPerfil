const mongoose = require('mongoose');

const ProveedorSchema = new mongoose.Schema({
  tipo_persona: { type: String }, // ej. 'natural', 'juridica'
  tipo_documento: { type: String },
  documento: { type: String, unique: true },
  nombre: { type: String, required: true },
  contacto: { type: String },
  telefono: { type: String },
  email: { type: String },
  direccion: { type: String },
  estado: { type: Boolean, default: true }
});

module.exports = mongoose.model('Proveedor', ProveedorSchema);
