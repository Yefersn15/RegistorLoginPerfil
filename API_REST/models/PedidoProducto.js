const mongoose = require('mongoose');

const PedidoProductoSchema = new mongoose.Schema({
  pedido_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', required: true },
  producto_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  cantidad: { type: Number, required: true },
  precio_unitario: { type: Number, required: true },
  subtotal: { type: Number, required: true },
  estado_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Estado' }
});

module.exports = mongoose.model('PedidoProducto', PedidoProductoSchema);
