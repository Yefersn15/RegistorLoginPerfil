const mongoose = require('mongoose');

const DomicilioSchema = new mongoose.Schema({
  pedido_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', required: true },
  direccion_id: { type: mongoose.Schema.Types.ObjectId, ref: 'DireccionEnvio' },
  estado_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Estado' },
  tarifa_id: { type: mongoose.Schema.Types.ObjectId, ref: 'TarifaDomicilio' },
  tarifa_aplicada: { type: Number }
});

module.exports = mongoose.model('Domicilio', DomicilioSchema);
