'use strict'

var User = require('../models/user');

function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando una acción del controlador de usuarios del api rest con Node y MongoDB'
    });
}

function saveUser(req, res) {

}

module.exports = {
    pruebas
};