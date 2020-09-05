const Viaje = require("../models/Viajes");
const Testimonio = require("..//models/Testimoinos");

exports.consultasHomepage = async (req, res) => {
  const viajes = await Viaje.findAll({ limit: 3 });

  const testimonios = await Testimonio.findAll({ limit: 3 });

  res.render("index", {
    pagina: "Próximos Viajes",
    clase: "home",
    //Le paso los viajes a la vista
    viajes,
    testimonios,
  });
};
