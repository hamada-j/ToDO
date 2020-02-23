// instalar y exporta Express $ npm install --save express
const express = require("express");

// creamos la appExpress, no es mas que un gran CHAINING EXPRESION
const app = express();

// app.use((req, res, next) => {
//   console.log("primero recepcion");
//   next();
// });

app.use("/api/tarea", (req, res, next) => {
  // el response de Express nos permite enviar una respuesta
  // res.send("hola desde la app de Express");
  const tareas = [
    {
      id: "a1b2c3d40000",
      titulo: "testing App of Express - Node",
      texto: "testing App of Express - Node",
      completa: "testing App of Express - Node"
    },
    {
      id: "a1b2c3d40001",
      titulo: "testing App of Express - Node",
      texto: "testing App of Express - Node",
      completa: "testing App of Express - Node"
    },
    {
      id: "a1b2c3d40002",
      titulo: "testing App of Express - Node",
      texto: "testing App of Express - Node",
      completa: "testing App of Express - Node"
    }
  ];
  res.status(200).json({
    message: "tareas from Back, Ok!",
    tareas: tareas
  });
  //http://localhost:3000/api/tarea
});

//exportamos
module.exports = app;
