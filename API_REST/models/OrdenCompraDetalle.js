const mongoose = require('mongoose');

const OrdenCompraDetalleSchema = new mongoose.Schema({
  orden_compra_id: { type: mongoose.Schema.Types.ObjectId, ref: 'OrdenCompra', required: true },
  producto_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  cantidad: { type: Number, required: true },
  costo_unitario: { type: Number, required: true },
  subtotal: { type: Number, required: true },
  estado_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Estado' }
});

module.exports = mongoose.model('OrdenCompraDetalle', OrdenCompraDetalleSchema);
