const Testimonio = require("../models/Testimoinos");

exports.mostrarTestimonios = async (req, res) => {
  const testimonios = await Testimonio.findAll();
  res.render("testimonios", {
    pagina: "Testimonios",
    testimonios,
  });
};

exports.agregarTestimonial = (req, res) => {
  //Vamos a validar que todos los campos esten llenos
  let { nombre, correo, mensaje } = req.body;

  let errores = [];
  if (!nombre) {
    errores.push({
      mensaje: "Olvidaste agregar tu nombre",
    });
  }
  if (!correo) {
    errores.push({
      mensaje: "Olvidaste agregar tu correo",
    });
  }
  if (!mensaje) {
    errores.push({
      mensaje: "Olvidaste agregar tu mensaje",
    });
  }

  if (errores.length > 0) {
    //Muestra la vista con errores
    res.render("testimonios", {
      errores,
      nombre,
      correo,
      mensaje,
    });
  } else {
    //almacenar en la base de datos
    Testimonio.create({
      nombre,
      correo,
      mensaje,
    })
      .then((testimonio) => res.redirect("/testimonios"))
      .catch((error) => console.log(error));
  }
};
