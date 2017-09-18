'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.port || 3678;

mongoose.connect('mongodb://localhost:27017/cursofavoritos', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("Conexión a mongodb correcta");
        app.listen(port, () => {
            console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);
            console.log("otro console para validar el cambio automatico con el nodemon");
        });
    }

});
