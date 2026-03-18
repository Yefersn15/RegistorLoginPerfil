const mongoose = require('mongoose');

const EstadoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipo: { type: String }, // ej. 'pedido', 'pago', 'domicilio'
  descripcion: { type: String },
  orden: { type: Number },
  color: { type: String }
});

module.exports = mongoose.model('Estado', EstadoSchema);
