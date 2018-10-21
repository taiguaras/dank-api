const express = require("express");
const routes = express.Router();

const StrainController = require('./controllers/StrainController');

//Primeira rota
routes.get("/strains", StrainController.index);

routes.get("/strains/:id", StrainController.show);
routes.post("/strains", StrainController.store);
routes.put("/strains/:id", StrainController.update);
routes.delete("/strains/:id", StrainController.destroy);


module.exports = routes;