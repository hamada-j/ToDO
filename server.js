// inicio del Back
// test console.log("testing"); $ node server.js
// importar de la internalidad de node http
// sintaxis node const --- requeido nombre
// const http = require("http");
// de la ExpressApp importamos
// const app = require("./backend/app");
// createServer recibira todas las peticones al Back
// le paso ES6 arrow function; mas poderosa
// const server = http.createServer(app);
//   (req, res) => {
//   res.end("Mi primera respuesta al Front");
// });
// la llamada
// o por el puerto por defeco o 3000
//server.listen(process.env.PORT || 3000);

///////// de la ExpressApp importamos
//const app = require("./backend/app");
//////// cremos una const
// const port = process.env.PORT || 3000;
//////// salida
// app.set("port", port);

// server.listen(port);

const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);

// import const debug = require('debug') paquete interno enNODEjs
// para dejar de subir y bajar el server
// instalmos $ npm install --save-dev nodemon
// "nodemon": "nodemon server.js" en package.json
