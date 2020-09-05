const express = require("express");
const router = express.Router();

//Controladores
const nosotrosController = require("../controllers/nosotrosController");
const homeController = require("../controllers/homeController");
const viajesController = require("../controllers/viajesControllers");
const testimoniosController = require("../controllers/testimoniosControllers");

module.exports = function () {
  router.get("/", homeController.consultasHomepage);
  router.get("/nosotros", nosotrosController.infoNosotros);
  router.get("/viajes", viajesController.mostrarViajes);
  router.get("/viajes/:id", viajesController.mostrarViaje);
  router.get("/testimonios", testimoniosController.mostrarTestimonios);
  //Cuando se llena un formulario
  router.post("/testimonios", testimoniosController.agregarTestimonial);

  return router;
};
