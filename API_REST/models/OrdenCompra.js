const mongoose = require('mongoose');

const OrdenCompraSchema = new mongoose.Schema({
  proveedor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Proveedor', required: true },
  fecha: { type: Date, default: Date.now },
  estado_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Estado' },
  total: { type: Number, default: 0 }
});

module.exports = mongoose.model('OrdenCompra', OrdenCompraSchema);
