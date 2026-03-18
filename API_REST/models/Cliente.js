const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String },
  email: { type: String, unique: true },
  telefono: { type: String },
  estado: { type: Boolean, default: true }
});

module.exports = mongoose.model('Cliente', ClienteSchema);
