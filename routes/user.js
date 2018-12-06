'use strict'

let express = require('express');
let UserController = require('../controllers/user');

let api = express.Router();

api.get('/probando-controlador', UserController.pruebas);

module.exports = api;