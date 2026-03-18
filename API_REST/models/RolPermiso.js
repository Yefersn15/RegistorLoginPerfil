const mongoose = require('mongoose');

const RolPermisoSchema = new mongoose.Schema({
  rol_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Rol', required: true },
  permiso_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Permiso', required: true }
});

module.exports = mongoose.model('RolPermiso', RolPermisoSchema);
