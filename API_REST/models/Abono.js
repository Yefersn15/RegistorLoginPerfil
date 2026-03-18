const mongoose = require('mongoose');

const AbonoSchema = new mongoose.Schema({
  pedido_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', required: true },
  monto: { type: Number, required: true },
  metodo: { type: String },
  comprobante: { type: String }, // URL o referencia
  estado_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Estado' },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Abono', AbonoSchema);
