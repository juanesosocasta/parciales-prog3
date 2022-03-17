const express = require("express");
const factura_usuarioSchema=require("../models/Jedy")
const routes = express.Router();

//POST Endpoint: http://localhost:3000/api/v1/factura_usuario
routes.post("/", (req, res) => {
    const factura_usuario = factura_usuarioSchema(req.body);
    factura_usuario
      .save()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });
//GET Endpoint: http://localhost:3000/api/v1/factura_usuario
routes.get("/", (req, res) => {
    factura_usuarioSchema
      .find()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });
//GET Endpoint: http://localhost:3000/api/v1/factura_usuario/:parametro
routes.get("/:factura_usuario_ref", (req, res) => {
    const { factura_usuario_ref } = req.params;
    factura_usuarioSchema
      .findById(factura_usuario_ref)
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });  

//put 
routes.put("/:factura_usuario_ref", (req, res) => {
    const { factura_usuario_ref } = req.params;
    const { Date, DocNumber, Status, Line:{Amount,Detailtype,ExpenseDetail:{costumer:{value,name,Ref:{value_ref,name_ref}},account:{value_account,name_account},LineStatus}},Vendedor:{value_vendedor,name_vendedor},TotalAmt} = req.body;
    factura_usuarioSchema
      .updateOne(
        { _Ref: factura_usuario_ref },
        { $set: { Date, DocNumber, Status, Line:{Amount,Detailtype,ExpenseDetail:{costumer:{value,name,Ref:{value_ref,name_ref}},account:{value_account,name_account},LineStatus}},Vendedor:{value_vendedor,name_vendedor},TotalAmt} }
      )
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });

  

module.exports = routes;