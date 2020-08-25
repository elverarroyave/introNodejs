// import express
const express = require("express");

// Configurar Express }
const app = express();

app.use("/", (req, res) => {
  res.send("Hola mundo en Nodejs");
});

app.listen(3000);
