const mongoose = require('mongoose');

const RolSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  descripcion: { type: String },
  estado: { type: Boolean, default: true }
});

module.exports = mongoose.model('Rol', RolSchema);
