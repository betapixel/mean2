'use strict'
let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// Cargar rutas
let user_routes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar cabeceras http

// Rutas base
app.use('/api', user_routes);
module.exports = app;