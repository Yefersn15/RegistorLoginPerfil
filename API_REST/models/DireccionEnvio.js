const mongoose = require('mongoose');

const DireccionEnvioSchema = new mongoose.Schema({
  cliente_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  direccion: { type: String, required: true },
  ciudad: { type: String },
  indicaciones: { type: String },
  estado: { type: Boolean, default: true }
});

module.exports = mongoose.model('DireccionEnvio', DireccionEnvioSchema);
