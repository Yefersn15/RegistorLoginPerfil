const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  cliente_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }, // vendedor
  tipo_venta: { type: String }, // ej. 'mostrador', 'domicilio'
  estado_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Estado' },
  total: { type: Number, default: 0 },
  fecha_pedido: { type: Date, default: Date.now },
  fecha_entrega: { type: Date }
});

module.exports = mongoose.model('Pedido', PedidoSchema);
