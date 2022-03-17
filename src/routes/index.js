const express = require("express");
const factura_usuarioRoutes = require("./factura_usuario_routes");

/* Cuando se trabaja con api las URI deben tener api/v1 
http://localhost:3000/api/v1...*/
function routerApi(app) {
  const router = express.Router();
  //Routas estaticas por la cual iniciaran todos los end point
  app.use("/api/v1", router);
  // Routas dinamicas depediendo del recurso o request
  app.use(express.json());
  router.use("/factura_usuario", factura_usuarioRoutes);
}
module.exports = routerApi;