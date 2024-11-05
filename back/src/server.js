const express = require ("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/index")

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev")); // "dev" es un formato de salida común, pero puedes elegir otro
app.use(express.json());

// Rutas
app.use(router);

module.exports = app;