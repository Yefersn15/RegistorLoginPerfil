const mongoose = require('mongoose');

const TarifaDomicilioSchema = new mongoose.Schema({
  ciudad: { type: String, required: true },
  tarifa: { type: Number, required: true },
  estado: { type: Boolean, default: true }
});

module.exports = mongoose.model('TarifaDomicilio', TarifaDomicilioSchema);
