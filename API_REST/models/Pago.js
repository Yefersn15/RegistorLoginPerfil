const mongoose = require('mongoose');

const PagoSchema = new mongoose.Schema({
  pedido_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', required: true },
  monto: { type: Number, required: true },
  metodo: { type: String }, // ej. 'efectivo', 'tarjeta', 'transferencia'
  estado_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Estado' },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pago', PagoSchema);
