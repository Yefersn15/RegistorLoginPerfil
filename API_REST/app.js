const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// settings
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(express.json());

// routes
const userRoute = require("./routes/user");
const categoriasRoute = require("./routes/categorias");
const proveedoresRoute = require("./routes/proveedores");
const productosRoute = require("./routes/productos");
const clientesRoute = require("./routes/clientes");
const pedidosRoute = require("./routes/pedidos");
const usuariosRoute = require("./routes/usuarios");
const rolesRoute = require("./routes/roles");
const permisosRoute = require("./routes/permisos");
const estadosRoute = require("./routes/estados");
const pagosRoute = require("./routes/pagos");
const catalogosRoute = require("./routes/catalogos");
const direccionesRoute = require("./routes/direcciones");
const tarifasRoute = require("./routes/tarifas");
const pedidosProductosRoute = require("./routes/pedidosProductos");
const abonosRoute = require("./routes/abonos");
const ordenesCompraRoute = require("./routes/ordenesCompra");
const ordenesCompraDetalleRoute = require("./routes/ordenesCompraDetalle");
const domiciliosRoute = require("./routes/domicilios");

// Rutas base
app.use("/api", userRoute);

// Rutas de entidades
app.use("/api/categorias", categoriasRoute);
app.use("/api/proveedores", proveedoresRoute);
app.use("/api/productos", productosRoute);
app.use("/api/clientes", clientesRoute);
app.use("/api/pedidos", pedidosRoute);
app.use("/api/usuarios", usuariosRoute);
app.use("/api/roles", rolesRoute);
app.use("/api/permisos", permisosRoute);
app.use("/api/estados", estadosRoute);
app.use("/api/pagos", pagosRoute);
app.use("/api/catalogos", catalogosRoute);
app.use("/api/direcciones", direccionesRoute);
app.use("/api/tarifas", tarifasRoute);
app.use("/api/pedidos-productos", pedidosProductosRoute);
app.use("/api/abonos", abonosRoute);
app.use("/api/ordenes-compra", ordenesCompraRoute);
app.use("/api/ordenes-compra-detalle", ordenesCompraDetalleRoute);
app.use("/api/domicilios", domiciliosRoute);

app.get("/", (req, res) => {
  res.send("Welcome to my API - Sistema de Gestión");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));

module.exports = app;
