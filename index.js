'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://127.0.0.1:27017/curso_mean2', { useNewUrlParser: true }, (error, res) => {


    if (error) {
        throw err;
    } else {
        console.log('La conexión a la base de datos está funcionando correctamente...');
        app.listen(port, function() {
            console.log('Servidor del api rest de música escuchando en http://localhost:' + port);

        })

    }
});